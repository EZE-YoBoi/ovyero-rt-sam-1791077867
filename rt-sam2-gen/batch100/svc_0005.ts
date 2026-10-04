// Service module 5 (codemod batch b100)
export interface Record5 {
  key: string;
  value: number;
}

export function normalize5(items: Array<Partial<Record5> | null>): Record5[] {
  const out: Record5[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
