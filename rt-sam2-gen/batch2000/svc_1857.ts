// Service module 1857 (codemod batch b2000)
export interface Record1857 {
  key: string;
  value: number;
}

export function normalize1857(items: Array<Partial<Record1857> | null>): Record1857[] {
  const out: Record1857[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
