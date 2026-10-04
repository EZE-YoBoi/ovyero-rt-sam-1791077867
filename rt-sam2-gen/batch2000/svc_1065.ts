// Service module 1065 (codemod batch b2000)
export interface Record1065 {
  key: string;
  value: number;
}

export function normalize1065(items: Array<Partial<Record1065> | null>): Record1065[] {
  const out: Record1065[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
