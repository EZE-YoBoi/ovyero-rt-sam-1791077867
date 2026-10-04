// Service module 1045 (codemod batch b2000)
export interface Record1045 {
  key: string;
  value: number;
}

export function normalize1045(items: Array<Partial<Record1045> | null>): Record1045[] {
  const out: Record1045[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
