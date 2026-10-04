// Service module 1837 (codemod batch b2000)
export interface Record1837 {
  key: string;
  value: number;
}

export function normalize1837(items: Array<Partial<Record1837> | null>): Record1837[] {
  const out: Record1837[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
