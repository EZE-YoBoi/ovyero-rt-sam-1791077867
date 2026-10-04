// Service module 1617 (codemod batch b2000)
export interface Record1617 {
  key: string;
  value: number;
}

export function normalize1617(items: Array<Partial<Record1617> | null>): Record1617[] {
  const out: Record1617[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
