// Service module 1321 (codemod batch b2000)
export interface Record1321 {
  key: string;
  value: number;
}

export function normalize1321(items: Array<Partial<Record1321> | null>): Record1321[] {
  const out: Record1321[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
