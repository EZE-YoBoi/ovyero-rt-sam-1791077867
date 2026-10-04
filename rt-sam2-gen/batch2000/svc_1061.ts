// Service module 1061 (codemod batch b2000)
export interface Record1061 {
  key: string;
  value: number;
}

export function normalize1061(items: Array<Partial<Record1061> | null>): Record1061[] {
  const out: Record1061[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
