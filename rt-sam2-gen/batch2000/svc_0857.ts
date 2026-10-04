// Service module 857 (codemod batch b2000)
export interface Record857 {
  key: string;
  value: number;
}

export function normalize857(items: Array<Partial<Record857> | null>): Record857[] {
  const out: Record857[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
