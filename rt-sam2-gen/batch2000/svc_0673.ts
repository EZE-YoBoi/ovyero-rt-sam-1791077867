// Service module 673 (codemod batch b2000)
export interface Record673 {
  key: string;
  value: number;
}

export function normalize673(items: Array<Partial<Record673> | null>): Record673[] {
  const out: Record673[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
