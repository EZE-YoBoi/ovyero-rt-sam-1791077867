// Service module 1357 (codemod batch b2000)
export interface Record1357 {
  key: string;
  value: number;
}

export function normalize1357(items: Array<Partial<Record1357> | null>): Record1357[] {
  const out: Record1357[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
