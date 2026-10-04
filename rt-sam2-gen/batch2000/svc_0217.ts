// Service module 217 (codemod batch b2000)
export interface Record217 {
  key: string;
  value: number;
}

export function normalize217(items: Array<Partial<Record217> | null>): Record217[] {
  const out: Record217[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
