// Service module 741 (codemod batch b2000)
export interface Record741 {
  key: string;
  value: number;
}

export function normalize741(items: Array<Partial<Record741> | null>): Record741[] {
  const out: Record741[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
