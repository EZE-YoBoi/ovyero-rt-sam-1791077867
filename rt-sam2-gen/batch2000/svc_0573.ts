// Service module 573 (codemod batch b2000)
export interface Record573 {
  key: string;
  value: number;
}

export function normalize573(items: Array<Partial<Record573> | null>): Record573[] {
  const out: Record573[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
