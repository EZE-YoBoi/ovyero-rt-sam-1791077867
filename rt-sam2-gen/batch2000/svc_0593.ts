// Service module 593 (codemod batch b2000)
export interface Record593 {
  key: string;
  value: number;
}

export function normalize593(items: Array<Partial<Record593> | null>): Record593[] {
  const out: Record593[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
