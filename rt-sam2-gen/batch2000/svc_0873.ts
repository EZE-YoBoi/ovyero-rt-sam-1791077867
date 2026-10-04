// Service module 873 (codemod batch b2000)
export interface Record873 {
  key: string;
  value: number;
}

export function normalize873(items: Array<Partial<Record873> | null>): Record873[] {
  const out: Record873[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
