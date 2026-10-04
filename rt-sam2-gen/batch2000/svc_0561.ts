// Service module 561 (codemod batch b2000)
export interface Record561 {
  key: string;
  value: number;
}

export function normalize561(items: Array<Partial<Record561> | null>): Record561[] {
  const out: Record561[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
