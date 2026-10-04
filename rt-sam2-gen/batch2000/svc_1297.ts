// Service module 1297 (codemod batch b2000)
export interface Record1297 {
  key: string;
  value: number;
}

export function normalize1297(items: Array<Partial<Record1297> | null>): Record1297[] {
  const out: Record1297[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
