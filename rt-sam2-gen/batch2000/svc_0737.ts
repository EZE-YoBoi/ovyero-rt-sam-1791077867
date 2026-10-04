// Service module 737 (codemod batch b2000)
export interface Record737 {
  key: string;
  value: number;
}

export function normalize737(items: Array<Partial<Record737> | null>): Record737[] {
  const out: Record737[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
