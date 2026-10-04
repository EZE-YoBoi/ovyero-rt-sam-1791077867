// Service module 781 (codemod batch b2000)
export interface Record781 {
  key: string;
  value: number;
}

export function normalize781(items: Array<Partial<Record781> | null>): Record781[] {
  const out: Record781[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
