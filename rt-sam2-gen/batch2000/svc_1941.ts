// Service module 1941 (codemod batch b2000)
export interface Record1941 {
  key: string;
  value: number;
}

export function normalize1941(items: Array<Partial<Record1941> | null>): Record1941[] {
  const out: Record1941[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
