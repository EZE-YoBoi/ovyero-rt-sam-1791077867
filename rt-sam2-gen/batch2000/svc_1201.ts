// Service module 1201 (codemod batch b2000)
export interface Record1201 {
  key: string;
  value: number;
}

export function normalize1201(items: Array<Partial<Record1201> | null>): Record1201[] {
  const out: Record1201[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
