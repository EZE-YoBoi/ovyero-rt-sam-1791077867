// Service module 793 (codemod batch b2000)
export interface Record793 {
  key: string;
  value: number;
}

export function normalize793(items: Array<Partial<Record793> | null>): Record793[] {
  const out: Record793[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
