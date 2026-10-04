// Service module 1717 (codemod batch b2000)
export interface Record1717 {
  key: string;
  value: number;
}

export function normalize1717(items: Array<Partial<Record1717> | null>): Record1717[] {
  const out: Record1717[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
