// Service module 761 (codemod batch b2000)
export interface Record761 {
  key: string;
  value: number;
}

export function normalize761(items: Array<Partial<Record761> | null>): Record761[] {
  const out: Record761[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
