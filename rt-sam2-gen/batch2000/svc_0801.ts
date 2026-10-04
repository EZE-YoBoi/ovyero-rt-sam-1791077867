// Service module 801 (codemod batch b2000)
export interface Record801 {
  key: string;
  value: number;
}

export function normalize801(items: Array<Partial<Record801> | null>): Record801[] {
  const out: Record801[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
