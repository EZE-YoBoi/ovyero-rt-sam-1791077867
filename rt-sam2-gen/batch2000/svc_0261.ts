// Service module 261 (codemod batch b2000)
export interface Record261 {
  key: string;
  value: number;
}

export function normalize261(items: Array<Partial<Record261> | null>): Record261[] {
  const out: Record261[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
