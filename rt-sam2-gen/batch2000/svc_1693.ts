// Service module 1693 (codemod batch b2000)
export interface Record1693 {
  key: string;
  value: number;
}

export function normalize1693(items: Array<Partial<Record1693> | null>): Record1693[] {
  const out: Record1693[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
