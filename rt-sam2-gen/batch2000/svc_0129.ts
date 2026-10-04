// Service module 129 (codemod batch b2000)
export interface Record129 {
  key: string;
  value: number;
}

export function normalize129(items: Array<Partial<Record129> | null>): Record129[] {
  const out: Record129[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
