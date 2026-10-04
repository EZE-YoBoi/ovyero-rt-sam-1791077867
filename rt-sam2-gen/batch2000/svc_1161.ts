// Service module 1161 (codemod batch b2000)
export interface Record1161 {
  key: string;
  value: number;
}

export function normalize1161(items: Array<Partial<Record1161> | null>): Record1161[] {
  const out: Record1161[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
