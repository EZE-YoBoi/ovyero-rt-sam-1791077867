// Service module 1073 (codemod batch b2000)
export interface Record1073 {
  key: string;
  value: number;
}

export function normalize1073(items: Array<Partial<Record1073> | null>): Record1073[] {
  const out: Record1073[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
