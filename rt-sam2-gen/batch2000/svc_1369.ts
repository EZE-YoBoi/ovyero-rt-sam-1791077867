// Service module 1369 (codemod batch b2000)
export interface Record1369 {
  key: string;
  value: number;
}

export function normalize1369(items: Array<Partial<Record1369> | null>): Record1369[] {
  const out: Record1369[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
