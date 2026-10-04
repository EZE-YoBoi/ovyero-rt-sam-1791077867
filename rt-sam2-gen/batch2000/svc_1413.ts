// Service module 1413 (codemod batch b2000)
export interface Record1413 {
  key: string;
  value: number;
}

export function normalize1413(items: Array<Partial<Record1413> | null>): Record1413[] {
  const out: Record1413[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
