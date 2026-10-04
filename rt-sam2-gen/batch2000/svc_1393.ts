// Service module 1393 (codemod batch b2000)
export interface Record1393 {
  key: string;
  value: number;
}

export function normalize1393(items: Array<Partial<Record1393> | null>): Record1393[] {
  const out: Record1393[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
