// Service module 125 (codemod batch b300)
export interface Record125 {
  key: string;
  value: number;
}

export function normalize125(items: Array<Partial<Record125> | null>): Record125[] {
  const out: Record125[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
