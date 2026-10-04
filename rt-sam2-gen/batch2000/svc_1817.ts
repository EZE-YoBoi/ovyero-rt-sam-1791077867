// Service module 1817 (codemod batch b2000)
export interface Record1817 {
  key: string;
  value: number;
}

export function normalize1817(items: Array<Partial<Record1817> | null>): Record1817[] {
  const out: Record1817[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
