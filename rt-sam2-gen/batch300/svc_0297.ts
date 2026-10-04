// Service module 297 (codemod batch b300)
export interface Record297 {
  key: string;
  value: number;
}

export function normalize297(items: Array<Partial<Record297> | null>): Record297[] {
  const out: Record297[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
