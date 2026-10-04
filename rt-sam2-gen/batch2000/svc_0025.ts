// Service module 25 (codemod batch b2000)
export interface Record25 {
  key: string;
  value: number;
}

export function normalize25(items: Array<Partial<Record25> | null>): Record25[] {
  const out: Record25[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
