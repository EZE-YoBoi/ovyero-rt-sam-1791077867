// Service module 1621 (codemod batch b2000)
export interface Record1621 {
  key: string;
  value: number;
}

export function normalize1621(items: Array<Partial<Record1621> | null>): Record1621[] {
  const out: Record1621[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
