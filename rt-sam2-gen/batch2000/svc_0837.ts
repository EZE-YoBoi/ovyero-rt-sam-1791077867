// Service module 837 (codemod batch b2000)
export interface Record837 {
  key: string;
  value: number;
}

export function normalize837(items: Array<Partial<Record837> | null>): Record837[] {
  const out: Record837[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
