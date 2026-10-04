// Service module 1761 (codemod batch b2000)
export interface Record1761 {
  key: string;
  value: number;
}

export function normalize1761(items: Array<Partial<Record1761> | null>): Record1761[] {
  const out: Record1761[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
