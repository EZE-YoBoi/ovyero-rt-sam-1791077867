// Service module 93 (codemod batch b2000)
export interface Record93 {
  key: string;
  value: number;
}

export function normalize93(items: Array<Partial<Record93> | null>): Record93[] {
  const out: Record93[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
