// Service module 1401 (codemod batch b2000)
export interface Record1401 {
  key: string;
  value: number;
}

export function normalize1401(items: Array<Partial<Record1401> | null>): Record1401[] {
  const out: Record1401[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
