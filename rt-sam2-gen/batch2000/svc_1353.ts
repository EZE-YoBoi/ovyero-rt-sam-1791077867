// Service module 1353 (codemod batch b2000)
export interface Record1353 {
  key: string;
  value: number;
}

export function normalize1353(items: Array<Partial<Record1353> | null>): Record1353[] {
  const out: Record1353[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
