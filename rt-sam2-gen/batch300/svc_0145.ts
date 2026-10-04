// Service module 145 (codemod batch b300)
export interface Record145 {
  key: string;
  value: number;
}

export function normalize145(items: Array<Partial<Record145> | null>): Record145[] {
  const out: Record145[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
