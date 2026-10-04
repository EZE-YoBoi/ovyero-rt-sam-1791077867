// Service module 237 (codemod batch b2000)
export interface Record237 {
  key: string;
  value: number;
}

export function normalize237(items: Array<Partial<Record237> | null>): Record237[] {
  const out: Record237[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
