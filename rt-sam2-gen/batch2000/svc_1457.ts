// Service module 1457 (codemod batch b2000)
export interface Record1457 {
  key: string;
  value: number;
}

export function normalize1457(items: Array<Partial<Record1457> | null>): Record1457[] {
  const out: Record1457[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
