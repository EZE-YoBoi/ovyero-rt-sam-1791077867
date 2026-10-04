// Service module 1729 (codemod batch b2000)
export interface Record1729 {
  key: string;
  value: number;
}

export function normalize1729(items: Array<Partial<Record1729> | null>): Record1729[] {
  const out: Record1729[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
