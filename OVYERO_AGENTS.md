<!-- AIOS:START -->
# Ovyero Governance - instructions for any AI agent working in this repo

This repository is governed by Ovyero. Every commit is reviewed automatically by
typed governance critics running on the Ovyero server. Model-agnostic - applies to
Claude, Cursor, Copilot, or any coding agent.

Full guide (profiles, what's checked, config tuning, comment style): https://aios-governance-staging.up.railway.app/docs/agents
With MCP, `aios_read_instructions` returns the same guide on demand.

## The governance loop - follow this on every task

1. **Write intent first.** Add an entry to `ovyero_artifacts/OVYERO_INTENT.md`:
   `## YYYY-MM-DD - Session: <task>` with **User Intent**, **AI Plan**, and the
   **Files Changed** you expect. If you can't state intent clearly, ask the user.
2. **Read the context files in `ovyero_artifacts/`** (created on install; populated on the first
   governed commit. Older installs may keep them at the repo root - check both):
   - `ovyero_artifacts/OVYERO_CODEBASE.md` - project snapshot. Read first.
   - `ovyero_artifacts/OVYERO_CODEBASE_MAP.md` - annotated directory tree. Orient before editing.
   - `ovyero_artifacts/OVYERO_RELATIONSHIP.md` - import graph, written on the first governed
     commit. Read before refactoring central code.
   - `ovyero_artifacts/OVYERO_DECISION_LOG.md` - architectural decisions. Read before non-trivial
     choices; APPEND when you make one. Don't re-litigate settled decisions.
   - `ovyero_artifacts/OVYERO_TECHNICAL_DEBT.md` - APPEND out-of-scope issues here instead of
     fixing inline (prevents scope creep that fails intent-match).
   - `ovyero_artifacts/OVYERO_MEMORY.md` - log of every governed commit.
   - `ovyero_artifacts/OVYERO_VERDICTS.md` - per-commit verdict table. Read when debugging a block.
   - `ovyero_artifacts/OVYERO_COMPLIANCE.md` / `ovyero_artifacts/OVYERO_SUPPLY_CHAIN.md` - only if present.
3. **Govern as you go (if MCP available).** `aios_govern_file` on files you change;
   `aios_read_codebase` / `aios_read_memory` for context. Otherwise the pre-commit
   hook is the fallback enforcement.
4. **Always commit with `git commit`** - governance runs at commit time. Don't leave
   work uncommitted.
5. **Don't use `git commit --no-verify`** unless the user explicitly says to.
6. **If a commit is GATEd:** read `ovyero_artifacts/OVYERO_VERDICTS.md` for the rule + line, fix it,
   re-stage, commit again. Do not bypass.
7. **After committing: evaluate intent match** in your `ovyero_artifacts/OVYERO_INTENT.md` entry -
   add **Evidence** and **Intent match** (YES/PARTIAL/NO). Fix the diff or the plan.
8. **Never commit** secrets, API keys, or `ovyero_user_config.json` / `aios_user_config.json`. The hook blocks
   secrets; keep credentials out of version control via `.gitignore`.

## Applicability config

`aios.config.json` maps file paths to profiles (which critics gate vs. signal vs.
skip). The installer auto-detects defaults. If a critic repeatedly GATEs a file
class it shouldn't (e.g. a style rule on a CLI tool), or the server returns a
`suggestedConfig` on a GATE, surface a `paths[]` proposal to the user - never apply
silently; the user owns the policy. The security floor (secrets, injection, auth,
crypto, compliance) always gates and can't be demoted. Profiles + tuning: https://aios-governance-staging.up.railway.app/docs/agents

## Comment discipline

Write a comment only when the WHY would surprise a reader of the diff (a hidden
invariant, a workaround, a subtle ordering). Never narrate what the code says;
never reference the current task/PR. A one-line purpose header on a non-obvious
function is welcome. Default to no comments; update or delete comments when the
code beneath them changes meaning.

## What governance checks

Security, code quality, data handling, operations, legal/licensing, AI/LLM safety,
firmware, assets, supply chain, and compliance - only the domains relevant to a
given file run. Full catalog: https://aios-governance-staging.up.railway.app/docs/agents

A `PASS` is not a guarantee - critics are heuristic; you remain responsible for what
you ship. A `GATE` is a hard stop: fix it, don't bypass it.
<!-- AIOS:END -->
