// Service module 721 (codemod batch b2000)
export interface Record721 {
  key: string;
  value: number;
}

export function normalize721(items: Array<Partial<Record721> | null>): Record721[] {
  const out: Record721[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
