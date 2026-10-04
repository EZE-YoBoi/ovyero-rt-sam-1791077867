// Service module 725 (codemod batch b2000)
export interface Record725 {
  key: string;
  value: number;
}

export function normalize725(items: Array<Partial<Record725> | null>): Record725[] {
  const out: Record725[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
