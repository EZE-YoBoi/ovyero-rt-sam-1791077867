// Service module 877 (codemod batch b2000)
export interface Record877 {
  key: string;
  value: number;
}

export function normalize877(items: Array<Partial<Record877> | null>): Record877[] {
  const out: Record877[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
