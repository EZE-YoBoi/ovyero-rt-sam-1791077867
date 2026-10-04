// Service module 1105 (codemod batch b2000)
export interface Record1105 {
  key: string;
  value: number;
}

export function normalize1105(items: Array<Partial<Record1105> | null>): Record1105[] {
  const out: Record1105[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
