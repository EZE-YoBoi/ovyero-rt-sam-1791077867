// Service module 1713 (codemod batch b2000)
export interface Record1713 {
  key: string;
  value: number;
}

export function normalize1713(items: Array<Partial<Record1713> | null>): Record1713[] {
  const out: Record1713[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
