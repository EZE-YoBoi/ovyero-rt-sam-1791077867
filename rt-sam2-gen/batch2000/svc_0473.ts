// Service module 473 (codemod batch b2000)
export interface Record473 {
  key: string;
  value: number;
}

export function normalize473(items: Array<Partial<Record473> | null>): Record473[] {
  const out: Record473[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
