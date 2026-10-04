// Service module 1825 (codemod batch b2000)
export interface Record1825 {
  key: string;
  value: number;
}

export function normalize1825(items: Array<Partial<Record1825> | null>): Record1825[] {
  const out: Record1825[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
