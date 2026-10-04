// Service module 221 (codemod batch b300)
export interface Record221 {
  key: string;
  value: number;
}

export function normalize221(items: Array<Partial<Record221> | null>): Record221[] {
  const out: Record221[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
