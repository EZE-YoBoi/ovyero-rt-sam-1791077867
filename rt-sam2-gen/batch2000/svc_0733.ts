// Service module 733 (codemod batch b2000)
export interface Record733 {
  key: string;
  value: number;
}

export function normalize733(items: Array<Partial<Record733> | null>): Record733[] {
  const out: Record733[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
