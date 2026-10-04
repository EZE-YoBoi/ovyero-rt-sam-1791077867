// Service module 897 (codemod batch b2000)
export interface Record897 {
  key: string;
  value: number;
}

export function normalize897(items: Array<Partial<Record897> | null>): Record897[] {
  const out: Record897[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
