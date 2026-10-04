// Service module 1425 (codemod batch b2000)
export interface Record1425 {
  key: string;
  value: number;
}

export function normalize1425(items: Array<Partial<Record1425> | null>): Record1425[] {
  const out: Record1425[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
