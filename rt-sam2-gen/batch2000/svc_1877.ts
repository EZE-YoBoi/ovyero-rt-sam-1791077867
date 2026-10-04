// Service module 1877 (codemod batch b2000)
export interface Record1877 {
  key: string;
  value: number;
}

export function normalize1877(items: Array<Partial<Record1877> | null>): Record1877[] {
  const out: Record1877[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
