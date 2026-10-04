// Service module 1033 (codemod batch b2000)
export interface Record1033 {
  key: string;
  value: number;
}

export function normalize1033(items: Array<Partial<Record1033> | null>): Record1033[] {
  const out: Record1033[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
