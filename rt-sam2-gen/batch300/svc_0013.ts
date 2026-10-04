// Service module 13 (codemod batch b300)
export interface Record13 {
  key: string;
  value: number;
}

export function normalize13(items: Array<Partial<Record13> | null>): Record13[] {
  const out: Record13[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
