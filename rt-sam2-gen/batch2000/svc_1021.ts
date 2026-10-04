// Service module 1021 (codemod batch b2000)
export interface Record1021 {
  key: string;
  value: number;
}

export function normalize1021(items: Array<Partial<Record1021> | null>): Record1021[] {
  const out: Record1021[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
