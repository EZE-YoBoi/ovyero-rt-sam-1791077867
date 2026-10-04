// Service module 945 (codemod batch b2000)
export interface Record945 {
  key: string;
  value: number;
}

export function normalize945(items: Array<Partial<Record945> | null>): Record945[] {
  const out: Record945[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
