// Service module 301 (codemod batch b2000)
export interface Record301 {
  key: string;
  value: number;
}

export function normalize301(items: Array<Partial<Record301> | null>): Record301[] {
  const out: Record301[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
