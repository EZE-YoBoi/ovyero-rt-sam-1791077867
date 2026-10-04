// Service module 1809 (codemod batch b2000)
export interface Record1809 {
  key: string;
  value: number;
}

export function normalize1809(items: Array<Partial<Record1809> | null>): Record1809[] {
  const out: Record1809[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
