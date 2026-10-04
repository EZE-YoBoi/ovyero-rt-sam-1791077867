// Service module 1253 (codemod batch b2000)
export interface Record1253 {
  key: string;
  value: number;
}

export function normalize1253(items: Array<Partial<Record1253> | null>): Record1253[] {
  const out: Record1253[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
