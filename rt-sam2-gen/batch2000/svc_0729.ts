// Service module 729 (codemod batch b2000)
export interface Record729 {
  key: string;
  value: number;
}

export function normalize729(items: Array<Partial<Record729> | null>): Record729[] {
  const out: Record729[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
