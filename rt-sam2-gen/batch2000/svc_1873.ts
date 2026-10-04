// Service module 1873 (codemod batch b2000)
export interface Record1873 {
  key: string;
  value: number;
}

export function normalize1873(items: Array<Partial<Record1873> | null>): Record1873[] {
  const out: Record1873[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
