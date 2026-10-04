// Service module 1037 (codemod batch b2000)
export interface Record1037 {
  key: string;
  value: number;
}

export function normalize1037(items: Array<Partial<Record1037> | null>): Record1037[] {
  const out: Record1037[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
