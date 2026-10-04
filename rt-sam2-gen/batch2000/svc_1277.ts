// Service module 1277 (codemod batch b2000)
export interface Record1277 {
  key: string;
  value: number;
}

export function normalize1277(items: Array<Partial<Record1277> | null>): Record1277[] {
  const out: Record1277[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
