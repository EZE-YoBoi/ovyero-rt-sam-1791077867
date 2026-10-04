// Service module 1525 (codemod batch b2000)
export interface Record1525 {
  key: string;
  value: number;
}

export function normalize1525(items: Array<Partial<Record1525> | null>): Record1525[] {
  const out: Record1525[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
