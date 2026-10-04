// Service module 1673 (codemod batch b2000)
export interface Record1673 {
  key: string;
  value: number;
}

export function normalize1673(items: Array<Partial<Record1673> | null>): Record1673[] {
  const out: Record1673[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
