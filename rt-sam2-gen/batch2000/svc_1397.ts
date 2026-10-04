// Service module 1397 (codemod batch b2000)
export interface Record1397 {
  key: string;
  value: number;
}

export function normalize1397(items: Array<Partial<Record1397> | null>): Record1397[] {
  const out: Record1397[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
