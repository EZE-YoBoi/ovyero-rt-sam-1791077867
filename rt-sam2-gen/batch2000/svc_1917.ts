// Service module 1917 (codemod batch b2000)
export interface Record1917 {
  key: string;
  value: number;
}

export function normalize1917(items: Array<Partial<Record1917> | null>): Record1917[] {
  const out: Record1917[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
