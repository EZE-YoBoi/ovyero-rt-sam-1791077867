// Service module 1661 (codemod batch b2000)
export interface Record1661 {
  key: string;
  value: number;
}

export function normalize1661(items: Array<Partial<Record1661> | null>): Record1661[] {
  const out: Record1661[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
