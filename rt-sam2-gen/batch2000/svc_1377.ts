// Service module 1377 (codemod batch b2000)
export interface Record1377 {
  key: string;
  value: number;
}

export function normalize1377(items: Array<Partial<Record1377> | null>): Record1377[] {
  const out: Record1377[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
