// Service module 933 (codemod batch b2000)
export interface Record933 {
  key: string;
  value: number;
}

export function normalize933(items: Array<Partial<Record933> | null>): Record933[] {
  const out: Record933[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
