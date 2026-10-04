// Service module 1677 (codemod batch b2000)
export interface Record1677 {
  key: string;
  value: number;
}

export function normalize1677(items: Array<Partial<Record1677> | null>): Record1677[] {
  const out: Record1677[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
