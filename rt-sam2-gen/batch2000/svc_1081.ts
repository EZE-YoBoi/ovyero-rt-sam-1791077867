// Service module 1081 (codemod batch b2000)
export interface Record1081 {
  key: string;
  value: number;
}

export function normalize1081(items: Array<Partial<Record1081> | null>): Record1081[] {
  const out: Record1081[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
