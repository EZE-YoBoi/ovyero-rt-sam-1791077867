// Service module 1273 (codemod batch b2000)
export interface Record1273 {
  key: string;
  value: number;
}

export function normalize1273(items: Array<Partial<Record1273> | null>): Record1273[] {
  const out: Record1273[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
