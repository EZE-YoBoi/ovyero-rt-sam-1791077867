// Service module 1141 (codemod batch b2000)
export interface Record1141 {
  key: string;
  value: number;
}

export function normalize1141(items: Array<Partial<Record1141> | null>): Record1141[] {
  const out: Record1141[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
