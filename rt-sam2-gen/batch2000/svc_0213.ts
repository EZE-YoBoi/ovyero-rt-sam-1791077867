// Service module 213 (codemod batch b2000)
export interface Record213 {
  key: string;
  value: number;
}

export function normalize213(items: Array<Partial<Record213> | null>): Record213[] {
  const out: Record213[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
