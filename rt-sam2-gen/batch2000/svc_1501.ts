// Service module 1501 (codemod batch b2000)
export interface Record1501 {
  key: string;
  value: number;
}

export function normalize1501(items: Array<Partial<Record1501> | null>): Record1501[] {
  const out: Record1501[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
