// Service module 901 (codemod batch b2000)
export interface Record901 {
  key: string;
  value: number;
}

export function normalize901(items: Array<Partial<Record901> | null>): Record901[] {
  const out: Record901[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
