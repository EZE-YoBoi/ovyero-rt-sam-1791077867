// Service module 1821 (codemod batch b2000)
export interface Record1821 {
  key: string;
  value: number;
}

export function normalize1821(items: Array<Partial<Record1821> | null>): Record1821[] {
  const out: Record1821[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
