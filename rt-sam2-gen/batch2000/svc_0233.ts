// Service module 233 (codemod batch b2000)
export interface Record233 {
  key: string;
  value: number;
}

export function normalize233(items: Array<Partial<Record233> | null>): Record233[] {
  const out: Record233[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
