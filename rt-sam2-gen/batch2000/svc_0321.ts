// Service module 321 (codemod batch b2000)
export interface Record321 {
  key: string;
  value: number;
}

export function normalize321(items: Array<Partial<Record321> | null>): Record321[] {
  const out: Record321[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
