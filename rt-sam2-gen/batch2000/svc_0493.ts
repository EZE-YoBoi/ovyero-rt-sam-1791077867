// Service module 493 (codemod batch b2000)
export interface Record493 {
  key: string;
  value: number;
}

export function normalize493(items: Array<Partial<Record493> | null>): Record493[] {
  const out: Record493[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
