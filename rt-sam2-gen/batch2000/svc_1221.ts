// Service module 1221 (codemod batch b2000)
export interface Record1221 {
  key: string;
  value: number;
}

export function normalize1221(items: Array<Partial<Record1221> | null>): Record1221[] {
  const out: Record1221[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
