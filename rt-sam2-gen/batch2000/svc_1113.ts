// Service module 1113 (codemod batch b2000)
export interface Record1113 {
  key: string;
  value: number;
}

export function normalize1113(items: Array<Partial<Record1113> | null>): Record1113[] {
  const out: Record1113[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
