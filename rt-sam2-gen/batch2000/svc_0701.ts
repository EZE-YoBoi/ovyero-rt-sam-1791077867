// Service module 701 (codemod batch b2000)
export interface Record701 {
  key: string;
  value: number;
}

export function normalize701(items: Array<Partial<Record701> | null>): Record701[] {
  const out: Record701[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
