// Service module 1745 (codemod batch b2000)
export interface Record1745 {
  key: string;
  value: number;
}

export function normalize1745(items: Array<Partial<Record1745> | null>): Record1745[] {
  const out: Record1745[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
