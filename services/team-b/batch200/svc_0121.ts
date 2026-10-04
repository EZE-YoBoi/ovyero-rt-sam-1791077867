// Service module 121 (codemod batch tb200)
export interface Record121 {
  key: string;
  value: number;
}

export function normalize121(items: Array<Partial<Record121> | null>): Record121[] {
  const out: Record121[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
