// Service module 1581 (codemod batch b2000)
export interface Record1581 {
  key: string;
  value: number;
}

export function normalize1581(items: Array<Partial<Record1581> | null>): Record1581[] {
  const out: Record1581[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
