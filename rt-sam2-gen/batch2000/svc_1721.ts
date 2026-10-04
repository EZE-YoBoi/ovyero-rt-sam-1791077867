// Service module 1721 (codemod batch b2000)
export interface Record1721 {
  key: string;
  value: number;
}

export function normalize1721(items: Array<Partial<Record1721> | null>): Record1721[] {
  const out: Record1721[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
