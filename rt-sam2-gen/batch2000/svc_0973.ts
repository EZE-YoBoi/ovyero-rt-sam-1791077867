// Service module 973 (codemod batch b2000)
export interface Record973 {
  key: string;
  value: number;
}

export function normalize973(items: Array<Partial<Record973> | null>): Record973[] {
  const out: Record973[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
