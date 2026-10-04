// Service module 1293 (codemod batch b2000)
export interface Record1293 {
  key: string;
  value: number;
}

export function normalize1293(items: Array<Partial<Record1293> | null>): Record1293[] {
  const out: Record1293[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
