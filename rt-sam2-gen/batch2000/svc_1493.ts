// Service module 1493 (codemod batch b2000)
export interface Record1493 {
  key: string;
  value: number;
}

export function normalize1493(items: Array<Partial<Record1493> | null>): Record1493[] {
  const out: Record1493[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
