// Service module 753 (codemod batch b2000)
export interface Record753 {
  key: string;
  value: number;
}

export function normalize753(items: Array<Partial<Record753> | null>): Record753[] {
  const out: Record753[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
