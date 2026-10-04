// Service module 1569 (codemod batch b2000)
export interface Record1569 {
  key: string;
  value: number;
}

export function normalize1569(items: Array<Partial<Record1569> | null>): Record1569[] {
  const out: Record1569[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
