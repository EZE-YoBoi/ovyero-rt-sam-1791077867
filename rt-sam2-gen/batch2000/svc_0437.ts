// Service module 437 (codemod batch b2000)
export interface Record437 {
  key: string;
  value: number;
}

export function normalize437(items: Array<Partial<Record437> | null>): Record437[] {
  const out: Record437[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
