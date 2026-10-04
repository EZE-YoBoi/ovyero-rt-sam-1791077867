// Service module 1517 (codemod batch b2000)
export interface Record1517 {
  key: string;
  value: number;
}

export function normalize1517(items: Array<Partial<Record1517> | null>): Record1517[] {
  const out: Record1517[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
