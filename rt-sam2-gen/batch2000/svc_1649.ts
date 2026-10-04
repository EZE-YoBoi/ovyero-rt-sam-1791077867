// Service module 1649 (codemod batch b2000)
export interface Record1649 {
  key: string;
  value: number;
}

export function normalize1649(items: Array<Partial<Record1649> | null>): Record1649[] {
  const out: Record1649[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
