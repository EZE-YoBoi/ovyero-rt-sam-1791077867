// Service module 1765 (codemod batch b2000)
export interface Record1765 {
  key: string;
  value: number;
}

export function normalize1765(items: Array<Partial<Record1765> | null>): Record1765[] {
  const out: Record1765[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
