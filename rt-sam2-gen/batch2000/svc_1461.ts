// Service module 1461 (codemod batch b2000)
export interface Record1461 {
  key: string;
  value: number;
}

export function normalize1461(items: Array<Partial<Record1461> | null>): Record1461[] {
  const out: Record1461[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
