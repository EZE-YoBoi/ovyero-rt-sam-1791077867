// Service module 1345 (codemod batch b2000)
export interface Record1345 {
  key: string;
  value: number;
}

export function normalize1345(items: Array<Partial<Record1345> | null>): Record1345[] {
  const out: Record1345[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
