// Service module 1041 (codemod batch b2000)
export interface Record1041 {
  key: string;
  value: number;
}

export function normalize1041(items: Array<Partial<Record1041> | null>): Record1041[] {
  const out: Record1041[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
