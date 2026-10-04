// Service module 1389 (codemod batch b2000)
export interface Record1389 {
  key: string;
  value: number;
}

export function normalize1389(items: Array<Partial<Record1389> | null>): Record1389[] {
  const out: Record1389[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
