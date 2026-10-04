// Service module 817 (codemod batch b2000)
export interface Record817 {
  key: string;
  value: number;
}

export function normalize817(items: Array<Partial<Record817> | null>): Record817[] {
  const out: Record817[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
