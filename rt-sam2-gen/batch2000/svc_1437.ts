// Service module 1437 (codemod batch b2000)
export interface Record1437 {
  key: string;
  value: number;
}

export function normalize1437(items: Array<Partial<Record1437> | null>): Record1437[] {
  const out: Record1437[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
