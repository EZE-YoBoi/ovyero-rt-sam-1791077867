// Service module 1289 (codemod batch b2000)
export interface Record1289 {
  key: string;
  value: number;
}

export function normalize1289(items: Array<Partial<Record1289> | null>): Record1289[] {
  const out: Record1289[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
