// Service module 141 (codemod batch b2000)
export interface Record141 {
  key: string;
  value: number;
}

export function normalize141(items: Array<Partial<Record141> | null>): Record141[] {
  const out: Record141[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
