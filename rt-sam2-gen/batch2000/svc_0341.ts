// Service module 341 (codemod batch b2000)
export interface Record341 {
  key: string;
  value: number;
}

export function normalize341(items: Array<Partial<Record341> | null>): Record341[] {
  const out: Record341[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
