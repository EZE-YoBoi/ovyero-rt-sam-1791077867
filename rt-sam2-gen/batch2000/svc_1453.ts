// Service module 1453 (codemod batch b2000)
export interface Record1453 {
  key: string;
  value: number;
}

export function normalize1453(items: Array<Partial<Record1453> | null>): Record1453[] {
  const out: Record1453[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
