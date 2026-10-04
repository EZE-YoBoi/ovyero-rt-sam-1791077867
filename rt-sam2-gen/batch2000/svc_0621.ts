// Service module 621 (codemod batch b2000)
export interface Record621 {
  key: string;
  value: number;
}

export function normalize621(items: Array<Partial<Record621> | null>): Record621[] {
  const out: Record621[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
