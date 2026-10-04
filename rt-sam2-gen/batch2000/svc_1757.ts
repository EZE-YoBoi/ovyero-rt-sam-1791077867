// Service module 1757 (codemod batch b2000)
export interface Record1757 {
  key: string;
  value: number;
}

export function normalize1757(items: Array<Partial<Record1757> | null>): Record1757[] {
  const out: Record1757[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
