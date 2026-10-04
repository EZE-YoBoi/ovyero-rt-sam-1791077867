// Service module 1597 (codemod batch b2000)
export interface Record1597 {
  key: string;
  value: number;
}

export function normalize1597(items: Array<Partial<Record1597> | null>): Record1597[] {
  const out: Record1597[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
