// Service module 1137 (codemod batch b2000)
export interface Record1137 {
  key: string;
  value: number;
}

export function normalize1137(items: Array<Partial<Record1137> | null>): Record1137[] {
  const out: Record1137[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
