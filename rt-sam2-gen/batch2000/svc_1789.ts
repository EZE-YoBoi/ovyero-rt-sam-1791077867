// Service module 1789 (codemod batch b2000)
export interface Record1789 {
  key: string;
  value: number;
}

export function normalize1789(items: Array<Partial<Record1789> | null>): Record1789[] {
  const out: Record1789[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
