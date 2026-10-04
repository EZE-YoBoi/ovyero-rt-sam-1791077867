// Service module 429 (codemod batch b2000)
export interface Record429 {
  key: string;
  value: number;
}

export function normalize429(items: Array<Partial<Record429> | null>): Record429[] {
  const out: Record429[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
