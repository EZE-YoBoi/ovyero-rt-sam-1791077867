// Service module 1593 (codemod batch b2000)
export interface Record1593 {
  key: string;
  value: number;
}

export function normalize1593(items: Array<Partial<Record1593> | null>): Record1593[] {
  const out: Record1593[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
