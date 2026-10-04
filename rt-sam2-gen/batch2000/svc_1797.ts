// Service module 1797 (codemod batch b2000)
export interface Record1797 {
  key: string;
  value: number;
}

export function normalize1797(items: Array<Partial<Record1797> | null>): Record1797[] {
  const out: Record1797[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
