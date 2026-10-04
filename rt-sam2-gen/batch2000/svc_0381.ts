// Service module 381 (codemod batch b2000)
export interface Record381 {
  key: string;
  value: number;
}

export function normalize381(items: Array<Partial<Record381> | null>): Record381[] {
  const out: Record381[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
