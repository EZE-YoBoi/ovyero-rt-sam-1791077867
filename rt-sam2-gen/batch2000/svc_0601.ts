// Service module 601 (codemod batch b2000)
export interface Record601 {
  key: string;
  value: number;
}

export function normalize601(items: Array<Partial<Record601> | null>): Record601[] {
  const out: Record601[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
