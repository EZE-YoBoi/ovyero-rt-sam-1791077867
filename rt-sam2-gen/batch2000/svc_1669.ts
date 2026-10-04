// Service module 1669 (codemod batch b2000)
export interface Record1669 {
  key: string;
  value: number;
}

export function normalize1669(items: Array<Partial<Record1669> | null>): Record1669[] {
  const out: Record1669[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
