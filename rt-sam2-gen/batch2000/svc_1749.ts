// Service module 1749 (codemod batch b2000)
export interface Record1749 {
  key: string;
  value: number;
}

export function normalize1749(items: Array<Partial<Record1749> | null>): Record1749[] {
  const out: Record1749[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
