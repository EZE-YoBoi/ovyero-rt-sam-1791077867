// Service module 361 (codemod batch b2000)
export interface Record361 {
  key: string;
  value: number;
}

export function normalize361(items: Array<Partial<Record361> | null>): Record361[] {
  const out: Record361[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
