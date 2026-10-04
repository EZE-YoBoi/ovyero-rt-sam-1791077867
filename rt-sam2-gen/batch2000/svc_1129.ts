// Service module 1129 (codemod batch b2000)
export interface Record1129 {
  key: string;
  value: number;
}

export function normalize1129(items: Array<Partial<Record1129> | null>): Record1129[] {
  const out: Record1129[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
