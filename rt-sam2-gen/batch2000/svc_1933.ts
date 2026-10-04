// Service module 1933 (codemod batch b2000)
export interface Record1933 {
  key: string;
  value: number;
}

export function normalize1933(items: Array<Partial<Record1933> | null>): Record1933[] {
  const out: Record1933[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
