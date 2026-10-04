// Service module 397 (codemod batch b2000)
export interface Record397 {
  key: string;
  value: number;
}

export function normalize397(items: Array<Partial<Record397> | null>): Record397[] {
  const out: Record397[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
