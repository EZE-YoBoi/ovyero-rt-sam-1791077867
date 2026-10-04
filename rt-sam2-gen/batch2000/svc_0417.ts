// Service module 417 (codemod batch b2000)
export interface Record417 {
  key: string;
  value: number;
}

export function normalize417(items: Array<Partial<Record417> | null>): Record417[] {
  const out: Record417[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
