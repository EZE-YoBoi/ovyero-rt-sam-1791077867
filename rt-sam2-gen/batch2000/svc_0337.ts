// Service module 337 (codemod batch b2000)
export interface Record337 {
  key: string;
  value: number;
}

export function normalize337(items: Array<Partial<Record337> | null>): Record337[] {
  const out: Record337[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
