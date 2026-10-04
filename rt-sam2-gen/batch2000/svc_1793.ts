// Service module 1793 (codemod batch b2000)
export interface Record1793 {
  key: string;
  value: number;
}

export function normalize1793(items: Array<Partial<Record1793> | null>): Record1793[] {
  const out: Record1793[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
