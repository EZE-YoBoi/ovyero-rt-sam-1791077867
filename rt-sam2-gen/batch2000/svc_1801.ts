// Service module 1801 (codemod batch b2000)
export interface Record1801 {
  key: string;
  value: number;
}

export function normalize1801(items: Array<Partial<Record1801> | null>): Record1801[] {
  const out: Record1801[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
