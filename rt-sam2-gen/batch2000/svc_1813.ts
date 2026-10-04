// Service module 1813 (codemod batch b2000)
export interface Record1813 {
  key: string;
  value: number;
}

export function normalize1813(items: Array<Partial<Record1813> | null>): Record1813[] {
  const out: Record1813[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
