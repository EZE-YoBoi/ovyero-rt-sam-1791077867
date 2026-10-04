// Service module 1741 (codemod batch b2000)
export interface Record1741 {
  key: string;
  value: number;
}

export function normalize1741(items: Array<Partial<Record1741> | null>): Record1741[] {
  const out: Record1741[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
