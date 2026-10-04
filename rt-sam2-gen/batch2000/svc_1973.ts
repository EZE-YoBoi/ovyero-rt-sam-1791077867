// Service module 1973 (codemod batch b2000)
export interface Record1973 {
  key: string;
  value: number;
}

export function normalize1973(items: Array<Partial<Record1973> | null>): Record1973[] {
  const out: Record1973[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
