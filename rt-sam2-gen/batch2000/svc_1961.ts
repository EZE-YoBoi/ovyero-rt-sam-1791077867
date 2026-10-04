// Service module 1961 (codemod batch b2000)
export interface Record1961 {
  key: string;
  value: number;
}

export function normalize1961(items: Array<Partial<Record1961> | null>): Record1961[] {
  const out: Record1961[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
