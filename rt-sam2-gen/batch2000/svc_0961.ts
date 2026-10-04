// Service module 961 (codemod batch b2000)
export interface Record961 {
  key: string;
  value: number;
}

export function normalize961(items: Array<Partial<Record961> | null>): Record961[] {
  const out: Record961[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
