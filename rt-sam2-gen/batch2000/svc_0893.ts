// Service module 893 (codemod batch b2000)
export interface Record893 {
  key: string;
  value: number;
}

export function normalize893(items: Array<Partial<Record893> | null>): Record893[] {
  const out: Record893[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
