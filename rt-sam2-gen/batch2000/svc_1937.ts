// Service module 1937 (codemod batch b2000)
export interface Record1937 {
  key: string;
  value: number;
}

export function normalize1937(items: Array<Partial<Record1937> | null>): Record1937[] {
  const out: Record1937[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
