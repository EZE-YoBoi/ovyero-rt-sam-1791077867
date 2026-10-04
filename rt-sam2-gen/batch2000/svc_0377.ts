// Service module 377 (codemod batch b2000)
export interface Record377 {
  key: string;
  value: number;
}

export function normalize377(items: Array<Partial<Record377> | null>): Record377[] {
  const out: Record377[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
