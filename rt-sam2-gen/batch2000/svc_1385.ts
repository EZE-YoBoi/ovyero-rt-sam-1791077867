// Service module 1385 (codemod batch b2000)
export interface Record1385 {
  key: string;
  value: number;
}

export function normalize1385(items: Array<Partial<Record1385> | null>): Record1385[] {
  const out: Record1385[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
