// Service module 773 (codemod batch b2000)
export interface Record773 {
  key: string;
  value: number;
}

export function normalize773(items: Array<Partial<Record773> | null>): Record773[] {
  const out: Record773[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
