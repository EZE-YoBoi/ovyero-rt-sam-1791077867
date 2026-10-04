// Service module 1361 (codemod batch b2000)
export interface Record1361 {
  key: string;
  value: number;
}

export function normalize1361(items: Array<Partial<Record1361> | null>): Record1361[] {
  const out: Record1361[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
