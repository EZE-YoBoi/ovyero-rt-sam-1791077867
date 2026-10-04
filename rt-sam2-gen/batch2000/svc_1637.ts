// Service module 1637 (codemod batch b2000)
export interface Record1637 {
  key: string;
  value: number;
}

export function normalize1637(items: Array<Partial<Record1637> | null>): Record1637[] {
  const out: Record1637[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
