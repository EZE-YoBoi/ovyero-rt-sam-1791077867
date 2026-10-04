// Service module 1921 (codemod batch b2000)
export interface Record1921 {
  key: string;
  value: number;
}

export function normalize1921(items: Array<Partial<Record1921> | null>): Record1921[] {
  const out: Record1921[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
