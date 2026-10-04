// Service module 41 (codemod batch ta200)
export interface Record41 {
  key: string;
  value: number;
}

export function normalize41(items: Array<Partial<Record41> | null>): Record41[] {
  const out: Record41[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
