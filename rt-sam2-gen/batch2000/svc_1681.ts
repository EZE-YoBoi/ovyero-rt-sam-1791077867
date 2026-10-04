// Service module 1681 (codemod batch b2000)
export interface Record1681 {
  key: string;
  value: number;
}

export function normalize1681(items: Array<Partial<Record1681> | null>): Record1681[] {
  const out: Record1681[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
