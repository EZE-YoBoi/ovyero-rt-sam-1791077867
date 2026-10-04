// Service module 1469 (codemod batch b2000)
export interface Record1469 {
  key: string;
  value: number;
}

export function normalize1469(items: Array<Partial<Record1469> | null>): Record1469[] {
  const out: Record1469[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
