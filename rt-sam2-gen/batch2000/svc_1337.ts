// Service module 1337 (codemod batch b2000)
export interface Record1337 {
  key: string;
  value: number;
}

export function normalize1337(items: Array<Partial<Record1337> | null>): Record1337[] {
  const out: Record1337[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
