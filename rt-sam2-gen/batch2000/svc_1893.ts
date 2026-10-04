// Service module 1893 (codemod batch b2000)
export interface Record1893 {
  key: string;
  value: number;
}

export function normalize1893(items: Array<Partial<Record1893> | null>): Record1893[] {
  const out: Record1893[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
