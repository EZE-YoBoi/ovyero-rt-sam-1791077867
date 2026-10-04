// Service module 325 (codemod batch b2000)
export interface Record325 {
  key: string;
  value: number;
}

export function normalize325(items: Array<Partial<Record325> | null>): Record325[] {
  const out: Record325[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
