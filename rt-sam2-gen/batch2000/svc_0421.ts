// Service module 421 (codemod batch b2000)
export interface Record421 {
  key: string;
  value: number;
}

export function normalize421(items: Array<Partial<Record421> | null>): Record421[] {
  const out: Record421[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
