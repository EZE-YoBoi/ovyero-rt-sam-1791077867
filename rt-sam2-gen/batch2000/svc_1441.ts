// Service module 1441 (codemod batch b2000)
export interface Record1441 {
  key: string;
  value: number;
}

export function normalize1441(items: Array<Partial<Record1441> | null>): Record1441[] {
  const out: Record1441[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
