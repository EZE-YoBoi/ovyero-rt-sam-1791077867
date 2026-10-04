// Service module 1653 (codemod batch b2000)
export interface Record1653 {
  key: string;
  value: number;
}

export function normalize1653(items: Array<Partial<Record1653> | null>): Record1653[] {
  const out: Record1653[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
