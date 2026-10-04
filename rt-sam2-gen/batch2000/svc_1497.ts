// Service module 1497 (codemod batch b2000)
export interface Record1497 {
  key: string;
  value: number;
}

export function normalize1497(items: Array<Partial<Record1497> | null>): Record1497[] {
  const out: Record1497[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
