// Service module 1225 (codemod batch b2000)
export interface Record1225 {
  key: string;
  value: number;
}

export function normalize1225(items: Array<Partial<Record1225> | null>): Record1225[] {
  const out: Record1225[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
