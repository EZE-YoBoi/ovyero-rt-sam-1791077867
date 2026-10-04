// Service module 425 (codemod batch b2000)
export interface Record425 {
  key: string;
  value: number;
}

export function normalize425(items: Array<Partial<Record425> | null>): Record425[] {
  const out: Record425[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
