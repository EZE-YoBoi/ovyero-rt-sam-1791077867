// Service module 1993 (codemod batch b2000)
export interface Record1993 {
  key: string;
  value: number;
}

export function normalize1993(items: Array<Partial<Record1993> | null>): Record1993[] {
  const out: Record1993[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
