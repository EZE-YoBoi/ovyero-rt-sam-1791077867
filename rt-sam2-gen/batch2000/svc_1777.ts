// Service module 1777 (codemod batch b2000)
export interface Record1777 {
  key: string;
  value: number;
}

export function normalize1777(items: Array<Partial<Record1777> | null>): Record1777[] {
  const out: Record1777[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
