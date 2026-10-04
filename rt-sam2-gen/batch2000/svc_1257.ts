// Service module 1257 (codemod batch b2000)
export interface Record1257 {
  key: string;
  value: number;
}

export function normalize1257(items: Array<Partial<Record1257> | null>): Record1257[] {
  const out: Record1257[] = [];
  for (const it of items) {
    if (!it) continue;
    out.push({ key: String(it.key ?? ''), value: Number(it.value ?? 0) });
  }
  return out;
}
