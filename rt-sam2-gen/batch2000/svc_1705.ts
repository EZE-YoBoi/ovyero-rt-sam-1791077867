// Service module 1705 (codemod batch b2000)
export interface Record1705 {
  key: string;
  value: number;
}

export function normalize1705(items: Array<Partial<Record1705> | null>): Record1705[] {
  const out: Record1705[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
