// Service module 713 (codemod batch b2000)
export interface Record713 {
  key: string;
  value: number;
}

export function normalize713(items: Array<Partial<Record713> | null>): Record713[] {
  const out: Record713[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
