// Service module 861 (codemod batch b2000)
export interface Record861 {
  key: string;
  value: number;
}

export function normalize861(items: Array<Partial<Record861> | null>): Record861[] {
  const out: Record861[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
