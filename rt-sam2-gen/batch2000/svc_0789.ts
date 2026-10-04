// Service module 789 (codemod batch b2000)
export interface Record789 {
  key: string;
  value: number;
}

export function normalize789(items: Array<Partial<Record789> | null>): Record789[] {
  const out: Record789[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
