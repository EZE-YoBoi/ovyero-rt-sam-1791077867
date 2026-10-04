// Service module 677 (codemod batch b2000)
export interface Record677 {
  key: string;
  value: number;
}

export function normalize677(items: Array<Partial<Record677> | null>): Record677[] {
  const out: Record677[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
