// Service module 1305 (codemod batch b2000)
export interface Record1305 {
  key: string;
  value: number;
}

export function normalize1305(items: Array<Partial<Record1305> | null>): Record1305[] {
  const out: Record1305[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
