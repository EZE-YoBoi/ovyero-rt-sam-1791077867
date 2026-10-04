// Service module 73 (codemod batch b300)
export interface Record73 {
  key: string;
  value: number;
}

export function normalize73(items: Array<Partial<Record73> | null>): Record73[] {
  const out: Record73[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
