// Service module 1753 (codemod batch b2000)
export interface Record1753 {
  key: string;
  value: number;
}

export function normalize1753(items: Array<Partial<Record1753> | null>): Record1753[] {
  const out: Record1753[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
