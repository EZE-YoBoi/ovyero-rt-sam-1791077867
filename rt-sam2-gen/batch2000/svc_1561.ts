// Service module 1561 (codemod batch b2000)
export interface Record1561 {
  key: string;
  value: number;
}

export function normalize1561(items: Array<Partial<Record1561> | null>): Record1561[] {
  const out: Record1561[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
