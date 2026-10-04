// Service module 1145 (codemod batch b2000)
export interface Record1145 {
  key: string;
  value: number;
}

export function normalize1145(items: Array<Partial<Record1145> | null>): Record1145[] {
  const out: Record1145[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
