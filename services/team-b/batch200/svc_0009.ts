// Service module 9 (codemod batch tb200)
export interface Record9 {
  key: string;
  value: number;
}

export function normalize9(items: Array<Partial<Record9> | null>): Record9[] {
  const out: Record9[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
