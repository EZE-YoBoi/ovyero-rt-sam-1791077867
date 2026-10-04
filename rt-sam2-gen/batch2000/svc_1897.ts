// Service module 1897 (codemod batch b2000)
export interface Record1897 {
  key: string;
  value: number;
}

export function normalize1897(items: Array<Partial<Record1897> | null>): Record1897[] {
  const out: Record1897[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
