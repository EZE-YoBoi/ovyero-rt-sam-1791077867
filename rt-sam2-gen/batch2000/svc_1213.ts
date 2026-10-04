// Service module 1213 (codemod batch b2000)
export interface Record1213 {
  key: string;
  value: number;
}

export function normalize1213(items: Array<Partial<Record1213> | null>): Record1213[] {
  const out: Record1213[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
