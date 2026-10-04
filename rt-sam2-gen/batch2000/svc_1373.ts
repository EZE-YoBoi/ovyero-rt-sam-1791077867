// Service module 1373 (codemod batch b2000)
export interface Record1373 {
  key: string;
  value: number;
}

export function normalize1373(items: Array<Partial<Record1373> | null>): Record1373[] {
  const out: Record1373[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
