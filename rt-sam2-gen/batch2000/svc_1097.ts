// Service module 1097 (codemod batch b2000)
export interface Record1097 {
  key: string;
  value: number;
}

export function normalize1097(items: Array<Partial<Record1097> | null>): Record1097[] {
  const out: Record1097[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
