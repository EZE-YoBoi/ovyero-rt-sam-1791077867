// Service module 1573 (codemod batch b2000)
export interface Record1573 {
  key: string;
  value: number;
}

export function normalize1573(items: Array<Partial<Record1573> | null>): Record1573[] {
  const out: Record1573[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
