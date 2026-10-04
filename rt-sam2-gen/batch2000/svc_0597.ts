// Service module 597 (codemod batch b2000)
export interface Record597 {
  key: string;
  value: number;
}

export function normalize597(items: Array<Partial<Record597> | null>): Record597[] {
  const out: Record597[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
