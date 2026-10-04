// Service module 173 (codemod batch ta200)
export interface Record173 {
  key: string;
  value: number;
}

export function normalize173(items: Array<Partial<Record173> | null>): Record173[] {
  const out: Record173[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
