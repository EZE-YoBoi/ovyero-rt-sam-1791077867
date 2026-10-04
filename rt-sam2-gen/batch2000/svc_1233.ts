// Service module 1233 (codemod batch b2000)
export interface Record1233 {
  key: string;
  value: number;
}

export function normalize1233(items: Array<Partial<Record1233> | null>): Record1233[] {
  const out: Record1233[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
