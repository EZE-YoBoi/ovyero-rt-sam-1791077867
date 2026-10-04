// Service module 1217 (codemod batch b2000)
export interface Record1217 {
  key: string;
  value: number;
}

export function normalize1217(items: Array<Partial<Record1217> | null>): Record1217[] {
  const out: Record1217[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
