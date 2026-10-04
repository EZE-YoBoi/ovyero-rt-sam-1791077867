// Service module 1861 (codemod batch b2000)
export interface Record1861 {
  key: string;
  value: number;
}

export function normalize1861(items: Array<Partial<Record1861> | null>): Record1861[] {
  const out: Record1861[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
