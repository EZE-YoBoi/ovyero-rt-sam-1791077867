// Service module 1317 (codemod batch b2000)
export interface Record1317 {
  key: string;
  value: number;
}

export function normalize1317(items: Array<Partial<Record1317> | null>): Record1317[] {
  const out: Record1317[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
