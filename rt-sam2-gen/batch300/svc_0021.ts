// Service module 21 (codemod batch b300)
export interface Record21 {
  key: string;
  value: number;
}

export function normalize21(items: Array<Partial<Record21> | null>): Record21[] {
  const out: Record21[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
