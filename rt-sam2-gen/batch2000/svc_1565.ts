// Service module 1565 (codemod batch b2000)
export interface Record1565 {
  key: string;
  value: number;
}

export function normalize1565(items: Array<Partial<Record1565> | null>): Record1565[] {
  const out: Record1565[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
