// Service module 1445 (codemod batch b2000)
export interface Record1445 {
  key: string;
  value: number;
}

export function normalize1445(items: Array<Partial<Record1445> | null>): Record1445[] {
  const out: Record1445[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
