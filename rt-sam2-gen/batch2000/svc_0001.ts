// Service module 1 (codemod batch b2000)
export interface Record1 {
  key: string;
  value: number;
}

export function normalize1(items: Array<Partial<Record1> | null>): Record1[] {
  const out: Record1[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
