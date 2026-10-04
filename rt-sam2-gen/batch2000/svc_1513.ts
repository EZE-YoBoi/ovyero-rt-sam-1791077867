// Service module 1513 (codemod batch b2000)
export interface Record1513 {
  key: string;
  value: number;
}

export function normalize1513(items: Array<Partial<Record1513> | null>): Record1513[] {
  const out: Record1513[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
