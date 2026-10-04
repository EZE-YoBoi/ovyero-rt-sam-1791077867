// Service module 629 (codemod batch b2000)
export interface Record629 {
  key: string;
  value: number;
}

export function normalize629(items: Array<Partial<Record629> | null>): Record629[] {
  const out: Record629[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
