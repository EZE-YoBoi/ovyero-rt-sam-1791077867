// Service module 133 (codemod batch ta200)
export interface Record133 {
  key: string;
  value: number;
}

export function normalize133(items: Array<Partial<Record133> | null>): Record133[] {
  const out: Record133[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
