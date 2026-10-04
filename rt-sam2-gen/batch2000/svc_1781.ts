// Service module 1781 (codemod batch b2000)
export interface Record1781 {
  key: string;
  value: number;
}

export function normalize1781(items: Array<Partial<Record1781> | null>): Record1781[] {
  const out: Record1781[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
