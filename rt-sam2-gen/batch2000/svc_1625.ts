// Service module 1625 (codemod batch b2000)
export interface Record1625 {
  key: string;
  value: number;
}

export function normalize1625(items: Array<Partial<Record1625> | null>): Record1625[] {
  const out: Record1625[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
