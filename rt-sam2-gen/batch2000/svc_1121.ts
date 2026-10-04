// Service module 1121 (codemod batch b2000)
export interface Record1121 {
  key: string;
  value: number;
}

export function normalize1121(items: Array<Partial<Record1121> | null>): Record1121[] {
  const out: Record1121[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
