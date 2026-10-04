// Service module 1833 (codemod batch b2000)
export interface Record1833 {
  key: string;
  value: number;
}

export function normalize1833(items: Array<Partial<Record1833> | null>): Record1833[] {
  const out: Record1833[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
