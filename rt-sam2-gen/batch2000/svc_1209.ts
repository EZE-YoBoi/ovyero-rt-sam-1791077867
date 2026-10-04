// Service module 1209 (codemod batch b2000)
export interface Record1209 {
  key: string;
  value: number;
}

export function normalize1209(items: Array<Partial<Record1209> | null>): Record1209[] {
  const out: Record1209[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
