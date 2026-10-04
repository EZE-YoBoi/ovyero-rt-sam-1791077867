// Service module 365 (codemod batch b2000)
export interface Record365 {
  key: string;
  value: number;
}

export function normalize365(items: Array<Partial<Record365> | null>): Record365[] {
  const out: Record365[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
