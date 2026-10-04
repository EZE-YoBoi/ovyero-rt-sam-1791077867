// Service module 517 (codemod batch b2000)
export interface Record517 {
  key: string;
  value: number;
}

export function normalize517(items: Array<Partial<Record517> | null>): Record517[] {
  const out: Record517[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
