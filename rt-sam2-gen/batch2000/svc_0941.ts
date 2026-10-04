// Service module 941 (codemod batch b2000)
export interface Record941 {
  key: string;
  value: number;
}

export function normalize941(items: Array<Partial<Record941> | null>): Record941[] {
  const out: Record941[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
