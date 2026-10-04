// Service module 1641 (codemod batch b2000)
export interface Record1641 {
  key: string;
  value: number;
}

export function normalize1641(items: Array<Partial<Record1641> | null>): Record1641[] {
  const out: Record1641[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
