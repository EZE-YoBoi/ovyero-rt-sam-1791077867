// Service module 1117 (codemod batch b2000)
export interface Record1117 {
  key: string;
  value: number;
}

export function normalize1117(items: Array<Partial<Record1117> | null>): Record1117[] {
  const out: Record1117[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
