// Service module 821 (codemod batch b2000)
export interface Record821 {
  key: string;
  value: number;
}

export function normalize821(items: Array<Partial<Record821> | null>): Record821[] {
  const out: Record821[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
