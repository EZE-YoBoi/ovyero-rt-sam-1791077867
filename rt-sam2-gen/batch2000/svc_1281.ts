// Service module 1281 (codemod batch b2000)
export interface Record1281 {
  key: string;
  value: number;
}

export function normalize1281(items: Array<Partial<Record1281> | null>): Record1281[] {
  const out: Record1281[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
