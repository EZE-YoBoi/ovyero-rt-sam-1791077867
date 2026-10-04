#!/usr/bin/env node
'use strict';

// AIOS Action Governance — Claude Code PreToolUse adapter.
//
// Drop this file into .claude/hooks/aios-pretool.js in your project and
// register it in .claude/settings.json (see docs at the AIOS troubleshoot
// page). When Claude Code is about to run a Bash command, it pipes a
// JSON describing the tool invocation to this script's stdin. The script
// asks the AIOS server whether to allow / ask / deny, and replies with
// the JSON shape Claude Code expects.
//
// The script is intentionally thin: it forwards the command + cwd to the
// AIOS server (which holds the classifier) and translates the response.
// No critic logic lives here. If a customer forks the script, they get
// less protection — not the brain.

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Order is load-bearing: ovyero_user_config.json is the current name and must
// win when both exist; aios_user_config.json is the pre-rebrand fallback.
// Searching only one name is the Finding-Y failure mode (a renamed config
// silently turns governance off with no error).
const CONFIG_NAMES = ['ovyero_user_config.json', 'aios_user_config.json'];

function readConfig() {
  // Search upward for the user config starting from CWD; mirrors how
  // the pre-commit hook locates it. Falls back to env vars.
  let dir = process.cwd();
  for (let i = 0; i < 10; i++) {
    for (const name of CONFIG_NAMES) {
      const candidate = path.join(dir, name);
      if (fs.existsSync(candidate)) {
        try {
          const raw = fs.readFileSync(candidate, 'utf8');
          const cfg = JSON.parse(raw);
          return cfg && cfg.governance ? cfg.governance : {};
        } catch { /* fall through */ }
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return {};
}

function postJson(url, headers, body) {
  return new Promise((resolve) => {
    const payload = JSON.stringify(body);
    let target;
    try { target = new URL(url); } catch { return resolve({ status: 0, body: null, error: 'BAD_URL' }); }
    const mod = target.protocol === 'https:' ? https : http;
    const req = mod.request({
      hostname: target.hostname,
      port: target.port || (target.protocol === 'https:' ? 443 : 80),
      path: target.pathname,
      method: 'POST',
      headers: Object.assign(
        { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) },
        headers,
      ),
    }, (res) => {
      let chunks = '';
      res.on('data', (c) => { chunks += c; });
      res.on('end', () => {
        let parsed = null;
        try { parsed = JSON.parse(chunks); } catch { /* leave null */ }
        resolve({ status: res.statusCode, body: parsed });
      });
    });
    // 4-second budget: if AIOS is slow, fail open. We do NOT want this
    // hook to be the thing that blocks every command on a network blip.
    req.setTimeout(4000, () => { req.destroy(); resolve({ status: 0, body: null, error: 'TIMEOUT' }); });
    req.on('error', (e) => resolve({ status: 0, body: null, error: e.code || e.message }));
    req.write(payload);
    req.end();
  });
}

function emitDecision(decision, reason) {
  // Claude Code PreToolUse hook output schema. The `hookSpecificOutput`
  // shape tells Claude Code whether to allow, ask the user, or deny.
  const out = {
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: decision,                  // 'allow' | 'ask' | 'deny'
      permissionDecisionReason: reason || '',
    },
  };
  process.stdout.write(JSON.stringify(out));
}

// AIOS_STRICT_ACTION=1 flips the fail-mode from open to closed.
//
// Default behavior (fail-open) is right for development: a network blip or
// a missing API key shouldn't break the agent's dev loop, and the
// pre-commit hook is the second-tier backstop. But customers running
// security-sensitive workloads (CISO-evaluation profile, regulated
// industries) want the opposite contract: if anything is misconfigured,
// the hook denies rather than waving the command through silently. This
// flag is the explicit opt-in for that contract — parallel to
// AIOS_STRICT_PUSH=1 (AIOS-P006) which does the same for pre-push.
//
// Setting it changes three failure paths from `allow` to `deny`:
//   1. No AIOS_API_KEY configured
//   2. Server unreachable / timed out (4-second budget)
//   3. Server returned a non-200 or malformed body
//
// In all three cases the audit reason is set explicitly so the customer
// can see in their dashboard / Actions page why the command got denied.
function isStrictMode() {
  const v = process.env.AIOS_STRICT_ACTION;
  return v === '1' || (typeof v === 'string' && v.toLowerCase() === 'true');
}

function failClosedOrOpen(reason) {
  if (isStrictMode()) {
    emitDecision('deny', `AIOS strict-action mode: ${reason}`);
  } else {
    emitDecision('allow', '');
  }
}

async function main() {
  // 1. Read the tool invocation Claude Code piped to stdin.
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  let input;
  try { input = JSON.parse(raw); } catch {
    // Malformed input — fail open (allow) so we don't break the agent.
    emitDecision('allow', '');
    return;
  }
  // We only care about Bash tool invocations. Other tools pass through.
  const tool = input && (input.tool || input.tool_name);
  const toolInput = input && (input.tool_input || input.toolInput || {});
  if (tool !== 'Bash') {
    emitDecision('allow', '');
    return;
  }
  const command = (toolInput && (toolInput.command || toolInput.script || '')) || '';
  if (!command) { emitDecision('allow', ''); return; }

  // 2. Resolve config (server URL + API key).
  const cfg = readConfig();
  const server = cfg.serverUrl || process.env.AIOS_SERVER || 'https://aios.visnryentertainment.com';
  const apiKey = cfg.apiKey || process.env.AIOS_API_KEY;
  if (!apiKey) {
    // No key configured — fail-open by default (don't break dev loop) or
    // fail-closed under AIOS_STRICT_ACTION=1 (customer explicitly opted in
    // to security-over-availability for action governance).
    process.stderr.write('AIOS: no API key configured; action governance disabled.\n');
    failClosedOrOpen('no API key configured for action-check');
    return;
  }

  // 3. Ask the AIOS server.
  const res = await postJson(`${server}/api/v1/action/check`,
    { Authorization: `Bearer ${apiKey}` },
    {
      command,
      cwd: process.cwd(),
      intent: (toolInput && (toolInput.description || toolInput.intent)) || null,
    },
  );

  // 4. Network-error path: fail-open by default (don't be the thing that
  //    blocks every command when the server has a hiccup) or fail-closed
  //    under AIOS_STRICT_ACTION=1 (deny rather than wave it through).
  if (res.status !== 200 || !res.body) {
    process.stderr.write(`AIOS: action-check failed (${res.error || 'HTTP ' + res.status}); ${isStrictMode() ? 'denying (strict mode)' : 'allowing'}.\n`);
    failClosedOrOpen(`action-check unreachable: ${res.error || 'HTTP ' + res.status}`);
    return;
  }

  const decision = res.body.decision || 'allow';
  const reason = res.body.reason || '';
  if (decision === 'deny' || decision === 'ask') {
    process.stderr.write(`AIOS [${res.body.category || 'action'}]: ${reason}\n`);
  }
  emitDecision(decision, reason);
}

main().catch((e) => {
  process.stderr.write(`AIOS hook error: ${e.message || e}\n`);
  failClosedOrOpen(`hook crashed: ${e.message || String(e).slice(0, 200)}`);
});
