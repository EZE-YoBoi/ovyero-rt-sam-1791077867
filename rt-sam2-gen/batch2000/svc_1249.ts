// Service module 1249 (codemod batch b2000)
export interface Record1249 {
  key: string;
  value: number;
}

export function normalize1249(items: Array<Partial<Record1249> | null>): Record1249[] {
  const out: Record1249[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
