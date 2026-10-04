// Service module 177 (codemod batch ta200)
export interface Record177 {
  key: string;
  value: number;
}

export function normalize177(items: Array<Partial<Record177> | null>): Record177[] {
  const out: Record177[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
