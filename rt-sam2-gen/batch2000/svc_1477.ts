// Service module 1477 (codemod batch b2000)
export interface Record1477 {
  key: string;
  value: number;
}

export function normalize1477(items: Array<Partial<Record1477> | null>): Record1477[] {
  const out: Record1477[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
