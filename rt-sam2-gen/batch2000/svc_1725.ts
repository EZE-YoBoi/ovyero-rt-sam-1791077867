// Service module 1725 (codemod batch b2000)
export interface Record1725 {
  key: string;
  value: number;
}

export function normalize1725(items: Array<Partial<Record1725> | null>): Record1725[] {
  const out: Record1725[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
