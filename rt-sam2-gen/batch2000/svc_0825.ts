// Service module 825 (codemod batch b2000)
export interface Record825 {
  key: string;
  value: number;
}

export function normalize825(items: Array<Partial<Record825> | null>): Record825[] {
  const out: Record825[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
