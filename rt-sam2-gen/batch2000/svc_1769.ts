// Service module 1769 (codemod batch b2000)
export interface Record1769 {
  key: string;
  value: number;
}

export function normalize1769(items: Array<Partial<Record1769> | null>): Record1769[] {
  const out: Record1769[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
