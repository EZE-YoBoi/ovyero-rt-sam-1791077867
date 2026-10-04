// Service module 1773 (codemod batch b2000)
export interface Record1773 {
  key: string;
  value: number;
}

export function normalize1773(items: Array<Partial<Record1773> | null>): Record1773[] {
  const out: Record1773[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
