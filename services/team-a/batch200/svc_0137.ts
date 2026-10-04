// Service module 137 (codemod batch ta200)
export interface Record137 {
  key: string;
  value: number;
}

export function normalize137(items: Array<Partial<Record137> | null>): Record137[] {
  const out: Record137[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
