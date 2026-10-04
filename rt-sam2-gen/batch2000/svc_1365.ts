// Service module 1365 (codemod batch b2000)
export interface Record1365 {
  key: string;
  value: number;
}

export function normalize1365(items: Array<Partial<Record1365> | null>): Record1365[] {
  const out: Record1365[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
