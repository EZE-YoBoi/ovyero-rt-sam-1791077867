// Service module 1737 (codemod batch b2000)
export interface Record1737 {
  key: string;
  value: number;
}

export function normalize1737(items: Array<Partial<Record1737> | null>): Record1737[] {
  const out: Record1737[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
