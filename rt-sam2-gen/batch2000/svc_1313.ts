// Service module 1313 (codemod batch b2000)
export interface Record1313 {
  key: string;
  value: number;
}

export function normalize1313(items: Array<Partial<Record1313> | null>): Record1313[] {
  const out: Record1313[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
