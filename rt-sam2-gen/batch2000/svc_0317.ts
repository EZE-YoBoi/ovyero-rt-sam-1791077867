// Service module 317 (codemod batch b2000)
export interface Record317 {
  key: string;
  value: number;
}

export function normalize317(items: Array<Partial<Record317> | null>): Record317[] {
  const out: Record317[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
