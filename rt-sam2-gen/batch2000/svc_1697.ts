// Service module 1697 (codemod batch b2000)
export interface Record1697 {
  key: string;
  value: number;
}

export function normalize1697(items: Array<Partial<Record1697> | null>): Record1697[] {
  const out: Record1697[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
