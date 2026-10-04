// Service module 1341 (codemod batch b2000)
export interface Record1341 {
  key: string;
  value: number;
}

export function normalize1341(items: Array<Partial<Record1341> | null>): Record1341[] {
  const out: Record1341[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
