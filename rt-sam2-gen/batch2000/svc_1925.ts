// Service module 1925 (codemod batch b2000)
export interface Record1925 {
  key: string;
  value: number;
}

export function normalize1925(items: Array<Partial<Record1925> | null>): Record1925[] {
  const out: Record1925[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
