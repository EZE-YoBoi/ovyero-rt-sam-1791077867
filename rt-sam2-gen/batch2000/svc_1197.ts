// Service module 1197 (codemod batch b2000)
export interface Record1197 {
  key: string;
  value: number;
}

export function normalize1197(items: Array<Partial<Record1197> | null>): Record1197[] {
  const out: Record1197[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
