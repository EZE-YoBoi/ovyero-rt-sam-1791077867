// Service module 1125 (codemod batch b2000)
export interface Record1125 {
  key: string;
  value: number;
}

export function normalize1125(items: Array<Partial<Record1125> | null>): Record1125[] {
  const out: Record1125[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
