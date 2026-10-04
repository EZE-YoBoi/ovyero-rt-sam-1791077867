// Service module 1481 (codemod batch b2000)
export interface Record1481 {
  key: string;
  value: number;
}

export function normalize1481(items: Array<Partial<Record1481> | null>): Record1481[] {
  const out: Record1481[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
