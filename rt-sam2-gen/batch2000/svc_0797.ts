// Service module 797 (codemod batch b2000)
export interface Record797 {
  key: string;
  value: number;
}

export function normalize797(items: Array<Partial<Record797> | null>): Record797[] {
  const out: Record797[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
