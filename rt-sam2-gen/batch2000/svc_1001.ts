// Service module 1001 (codemod batch b2000)
export interface Record1001 {
  key: string;
  value: number;
}

export function normalize1001(items: Array<Partial<Record1001> | null>): Record1001[] {
  const out: Record1001[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
