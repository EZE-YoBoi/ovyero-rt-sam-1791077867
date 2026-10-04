// Service module 777 (codemod batch b2000)
export interface Record777 {
  key: string;
  value: number;
}

export function normalize777(items: Array<Partial<Record777> | null>): Record777[] {
  const out: Record777[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
