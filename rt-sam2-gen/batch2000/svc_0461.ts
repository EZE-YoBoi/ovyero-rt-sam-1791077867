// Service module 461 (codemod batch b2000)
export interface Record461 {
  key: string;
  value: number;
}

export function normalize461(items: Array<Partial<Record461> | null>): Record461[] {
  const out: Record461[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
