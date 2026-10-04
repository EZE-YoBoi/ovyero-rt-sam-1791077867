// Service module 1017 (codemod batch b2000)
export interface Record1017 {
  key: string;
  value: number;
}

export function normalize1017(items: Array<Partial<Record1017> | null>): Record1017[] {
  const out: Record1017[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
