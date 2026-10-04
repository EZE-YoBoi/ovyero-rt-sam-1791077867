// Service module 277 (codemod batch b2000)
export interface Record277 {
  key: string;
  value: number;
}

export function normalize277(items: Array<Partial<Record277> | null>): Record277[] {
  const out: Record277[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
