// Service module 225 (codemod batch b2000)
export interface Record225 {
  key: string;
  value: number;
}

export function normalize225(items: Array<Partial<Record225> | null>): Record225[] {
  const out: Record225[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
