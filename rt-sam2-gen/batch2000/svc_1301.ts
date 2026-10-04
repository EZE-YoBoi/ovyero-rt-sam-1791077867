// Service module 1301 (codemod batch b2000)
export interface Record1301 {
  key: string;
  value: number;
}

export function normalize1301(items: Array<Partial<Record1301> | null>): Record1301[] {
  const out: Record1301[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
