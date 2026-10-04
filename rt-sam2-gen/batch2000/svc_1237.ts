// Service module 1237 (codemod batch b2000)
export interface Record1237 {
  key: string;
  value: number;
}

export function normalize1237(items: Array<Partial<Record1237> | null>): Record1237[] {
  const out: Record1237[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
