// Service module 1245 (codemod batch b2000)
export interface Record1245 {
  key: string;
  value: number;
}

export function normalize1245(items: Array<Partial<Record1245> | null>): Record1245[] {
  const out: Record1245[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
