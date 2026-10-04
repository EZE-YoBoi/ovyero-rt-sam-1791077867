// Service module 393 (codemod batch b2000)
export interface Record393 {
  key: string;
  value: number;
}

export function normalize393(items: Array<Partial<Record393> | null>): Record393[] {
  const out: Record393[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
