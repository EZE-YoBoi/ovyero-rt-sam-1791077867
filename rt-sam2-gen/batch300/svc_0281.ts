// Service module 281 (codemod batch b300)
export interface Record281 {
  key: string;
  value: number;
}

export function normalize281(items: Array<Partial<Record281> | null>): Record281[] {
  const out: Record281[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
