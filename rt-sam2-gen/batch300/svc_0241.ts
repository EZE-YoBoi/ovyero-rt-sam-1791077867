// Service module 241 (codemod batch b300)
export interface Record241 {
  key: string;
  value: number;
}

export function normalize241(items: Array<Partial<Record241> | null>): Record241[] {
  const out: Record241[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
