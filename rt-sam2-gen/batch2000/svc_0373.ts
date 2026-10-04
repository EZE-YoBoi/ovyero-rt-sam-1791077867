// Service module 373 (codemod batch b2000)
export interface Record373 {
  key: string;
  value: number;
}

export function normalize373(items: Array<Partial<Record373> | null>): Record373[] {
  const out: Record373[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
