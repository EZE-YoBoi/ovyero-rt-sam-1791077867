// Service module 1785 (codemod batch b2000)
export interface Record1785 {
  key: string;
  value: number;
}

export function normalize1785(items: Array<Partial<Record1785> | null>): Record1785[] {
  const out: Record1785[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
