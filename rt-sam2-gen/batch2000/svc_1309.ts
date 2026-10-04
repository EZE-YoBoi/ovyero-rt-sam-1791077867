// Service module 1309 (codemod batch b2000)
export interface Record1309 {
  key: string;
  value: number;
}

export function normalize1309(items: Array<Partial<Record1309> | null>): Record1309[] {
  const out: Record1309[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
