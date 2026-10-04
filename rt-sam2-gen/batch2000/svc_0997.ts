// Service module 997 (codemod batch b2000)
export interface Record997 {
  key: string;
  value: number;
}

export function normalize997(items: Array<Partial<Record997> | null>): Record997[] {
  const out: Record997[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
