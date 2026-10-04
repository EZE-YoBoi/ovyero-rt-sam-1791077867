// Service module 1417 (codemod batch b2000)
export interface Record1417 {
  key: string;
  value: number;
}

export function normalize1417(items: Array<Partial<Record1417> | null>): Record1417[] {
  const out: Record1417[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
