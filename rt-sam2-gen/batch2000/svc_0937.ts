// Service module 937 (codemod batch b2000)
export interface Record937 {
  key: string;
  value: number;
}

export function normalize937(items: Array<Partial<Record937> | null>): Record937[] {
  const out: Record937[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
