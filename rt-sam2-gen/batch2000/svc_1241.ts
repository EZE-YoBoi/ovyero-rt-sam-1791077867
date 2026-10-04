// Service module 1241 (codemod batch b2000)
export interface Record1241 {
  key: string;
  value: number;
}

export function normalize1241(items: Array<Partial<Record1241> | null>): Record1241[] {
  const out: Record1241[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
