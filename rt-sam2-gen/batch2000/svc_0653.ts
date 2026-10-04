// Service module 653 (codemod batch b2000)
export interface Record653 {
  key: string;
  value: number;
}

export function normalize653(items: Array<Partial<Record653> | null>): Record653[] {
  const out: Record653[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
