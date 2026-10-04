// Service module 917 (codemod batch b2000)
export interface Record917 {
  key: string;
  value: number;
}

export function normalize917(items: Array<Partial<Record917> | null>): Record917[] {
  const out: Record917[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
