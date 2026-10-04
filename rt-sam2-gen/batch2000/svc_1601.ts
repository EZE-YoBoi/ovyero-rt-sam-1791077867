// Service module 1601 (codemod batch b2000)
export interface Record1601 {
  key: string;
  value: number;
}

export function normalize1601(items: Array<Partial<Record1601> | null>): Record1601[] {
  const out: Record1601[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
