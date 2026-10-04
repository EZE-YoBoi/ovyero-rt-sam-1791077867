// Service module 1473 (codemod batch b2000)
export interface Record1473 {
  key: string;
  value: number;
}

export function normalize1473(items: Array<Partial<Record1473> | null>): Record1473[] {
  const out: Record1473[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
