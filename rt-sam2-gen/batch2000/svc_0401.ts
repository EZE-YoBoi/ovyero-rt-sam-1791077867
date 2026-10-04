// Service module 401 (codemod batch b2000)
export interface Record401 {
  key: string;
  value: number;
}

export function normalize401(items: Array<Partial<Record401> | null>): Record401[] {
  const out: Record401[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
