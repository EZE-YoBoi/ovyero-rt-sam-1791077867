// Service module 1709 (codemod batch b2000)
export interface Record1709 {
  key: string;
  value: number;
}

export function normalize1709(items: Array<Partial<Record1709> | null>): Record1709[] {
  const out: Record1709[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
