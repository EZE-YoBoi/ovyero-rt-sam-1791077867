// Service module 1733 (codemod batch b2000)
export interface Record1733 {
  key: string;
  value: number;
}

export function normalize1733(items: Array<Partial<Record1733> | null>): Record1733[] {
  const out: Record1733[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
