// Service module 1193 (codemod batch b2000)
export interface Record1193 {
  key: string;
  value: number;
}

export function normalize1193(items: Array<Partial<Record1193> | null>): Record1193[] {
  const out: Record1193[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
