// Service module 1381 (codemod batch b2000)
export interface Record1381 {
  key: string;
  value: number;
}

export function normalize1381(items: Array<Partial<Record1381> | null>): Record1381[] {
  const out: Record1381[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
