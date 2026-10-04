// Service module 1205 (codemod batch b2000)
export interface Record1205 {
  key: string;
  value: number;
}

export function normalize1205(items: Array<Partial<Record1205> | null>): Record1205[] {
  const out: Record1205[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
