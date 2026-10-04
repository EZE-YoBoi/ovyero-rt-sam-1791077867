// Service module 17 (codemod batch b100)
export interface Record17 {
  key: string;
  value: number;
}

export function normalize17(items: Array<Partial<Record17> | null>): Record17[] {
  const out: Record17[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
