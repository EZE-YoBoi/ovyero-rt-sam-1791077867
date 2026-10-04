// Service module 1325 (codemod batch b2000)
export interface Record1325 {
  key: string;
  value: number;
}

export function normalize1325(items: Array<Partial<Record1325> | null>): Record1325[] {
  const out: Record1325[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
