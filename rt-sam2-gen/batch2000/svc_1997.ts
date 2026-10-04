// Service module 1997 (codemod batch b2000)
export interface Record1997 {
  key: string;
  value: number;
}

export function normalize1997(items: Array<Partial<Record1997> | null>): Record1997[] {
  const out: Record1997[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
