// Service module 1645 (codemod batch b2000)
export interface Record1645 {
  key: string;
  value: number;
}

export function normalize1645(items: Array<Partial<Record1645> | null>): Record1645[] {
  const out: Record1645[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
