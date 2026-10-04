// Service module 273 (codemod batch b300)
export interface Record273 {
  key: string;
  value: number;
}

export function normalize273(items: Array<Partial<Record273> | null>): Record273[] {
  const out: Record273[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
