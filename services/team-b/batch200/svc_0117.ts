// Service module 117 (codemod batch tb200)
export interface Record117 {
  key: string;
  value: number;
}

export function normalize117(items: Array<Partial<Record117> | null>): Record117[] {
  const out: Record117[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
