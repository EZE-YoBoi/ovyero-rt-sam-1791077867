// Service module 925 (codemod batch b2000)
export interface Record925 {
  key: string;
  value: number;
}

export function normalize925(items: Array<Partial<Record925> | null>): Record925[] {
  const out: Record925[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
