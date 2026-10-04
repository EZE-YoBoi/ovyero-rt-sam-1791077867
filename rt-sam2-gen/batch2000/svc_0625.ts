// Service module 625 (codemod batch b2000)
export interface Record625 {
  key: string;
  value: number;
}

export function normalize625(items: Array<Partial<Record625> | null>): Record625[] {
  const out: Record625[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
