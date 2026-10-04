// Service module 1093 (codemod batch b2000)
export interface Record1093 {
  key: string;
  value: number;
}

export function normalize1093(items: Array<Partial<Record1093> | null>): Record1093[] {
  const out: Record1093[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
