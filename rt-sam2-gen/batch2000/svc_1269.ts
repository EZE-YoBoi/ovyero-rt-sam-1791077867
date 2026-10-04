// Service module 1269 (codemod batch b2000)
export interface Record1269 {
  key: string;
  value: number;
}

export function normalize1269(items: Array<Partial<Record1269> | null>): Record1269[] {
  const out: Record1269[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
