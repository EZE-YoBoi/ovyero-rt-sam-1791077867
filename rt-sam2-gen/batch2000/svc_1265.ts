// Service module 1265 (codemod batch b2000)
export interface Record1265 {
  key: string;
  value: number;
}

export function normalize1265(items: Array<Partial<Record1265> | null>): Record1265[] {
  const out: Record1265[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
