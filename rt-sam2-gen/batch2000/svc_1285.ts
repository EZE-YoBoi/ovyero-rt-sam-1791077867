// Service module 1285 (codemod batch b2000)
export interface Record1285 {
  key: string;
  value: number;
}

export function normalize1285(items: Array<Partial<Record1285> | null>): Record1285[] {
  const out: Record1285[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
