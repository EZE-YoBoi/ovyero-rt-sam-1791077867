// Service module 1013 (codemod batch b2000)
export interface Record1013 {
  key: string;
  value: number;
}

export function normalize1013(items: Array<Partial<Record1013> | null>): Record1013[] {
  const out: Record1013[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
