// Service module 717 (codemod batch b2000)
export interface Record717 {
  key: string;
  value: number;
}

export function normalize717(items: Array<Partial<Record717> | null>): Record717[] {
  const out: Record717[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
