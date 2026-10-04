// Service module 1537 (codemod batch b2000)
export interface Record1537 {
  key: string;
  value: number;
}

export function normalize1537(items: Array<Partial<Record1537> | null>): Record1537[] {
  const out: Record1537[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
