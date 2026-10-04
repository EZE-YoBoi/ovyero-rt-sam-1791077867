// Service module 37 (codemod batch tb200)
export interface Record37 {
  key: string;
  value: number;
}

export function normalize37(items: Array<Partial<Record37> | null>): Record37[] {
  const out: Record37[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
