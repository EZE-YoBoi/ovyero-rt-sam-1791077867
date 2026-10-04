// Service module 1421 (codemod batch b2000)
export interface Record1421 {
  key: string;
  value: number;
}

export function normalize1421(items: Array<Partial<Record1421> | null>): Record1421[] {
  const out: Record1421[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
