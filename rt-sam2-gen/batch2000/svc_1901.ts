// Service module 1901 (codemod batch b2000)
export interface Record1901 {
  key: string;
  value: number;
}

export function normalize1901(items: Array<Partial<Record1901> | null>): Record1901[] {
  const out: Record1901[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
