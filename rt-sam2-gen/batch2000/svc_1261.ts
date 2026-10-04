// Service module 1261 (codemod batch b2000)
export interface Record1261 {
  key: string;
  value: number;
}

export function normalize1261(items: Array<Partial<Record1261> | null>): Record1261[] {
  const out: Record1261[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
