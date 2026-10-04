// Service module 833 (codemod batch b2000)
export interface Record833 {
  key: string;
  value: number;
}

export function normalize833(items: Array<Partial<Record833> | null>): Record833[] {
  const out: Record833[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
