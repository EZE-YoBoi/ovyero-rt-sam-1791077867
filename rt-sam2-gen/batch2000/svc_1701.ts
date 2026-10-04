// Service module 1701 (codemod batch b2000)
export interface Record1701 {
  key: string;
  value: number;
}

export function normalize1701(items: Array<Partial<Record1701> | null>): Record1701[] {
  const out: Record1701[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
