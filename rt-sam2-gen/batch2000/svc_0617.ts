// Service module 617 (codemod batch b2000)
export interface Record617 {
  key: string;
  value: number;
}

export function normalize617(items: Array<Partial<Record617> | null>): Record617[] {
  const out: Record617[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
