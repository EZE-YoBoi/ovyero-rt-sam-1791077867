// Service module 293 (codemod batch b300)
export interface Record293 {
  key: string;
  value: number;
}

export function normalize293(items: Array<Partial<Record293> | null>): Record293[] {
  const out: Record293[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
