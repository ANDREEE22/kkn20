'use client';

import { useState } from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/badge';
import Reveal from '@/components/ui/reveal';
import { cn } from '@/lib/utils';
import type { Proker } from '@/data/proker';

const kategoriList = ['Semua', 'Pendidikan', 'Ekonomi', 'Lingkungan', 'Kesehatan', 'Sosial'] as const;

export default function ProkerGrid({ items }: { items: Proker[] }) {
  const [filter, setFilter] = useState<(typeof kategoriList)[number]>('Semua');

  const filtered = filter === 'Semua' ? items : items.filter((p) => p.kategori === filter);

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-2">
        {kategoriList.map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={cn(
              'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors',
              filter === k
                ? 'border-gold bg-gold text-ink'
                : 'border-ink-border text-muted hover:border-gold/50 hover:text-gold'
            )}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.id} delay={(i % 6) * 0.06}>
            <Link
              href={`/proker/${p.id}`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-ink-border bg-ink-soft p-6 transition-colors hover:border-gold/50"
            >
              <div>
                <Badge tone={p.status === 'Selesai' ? 'green' : 'gold'}>{p.status}</Badge>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug group-hover:text-gold">
                  {p.judul}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {p.ringkasan}
                </p>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-gold">
                {p.kategori} · {p.tanggal}
              </p>
            </Link>
          </Reveal>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center font-body text-sm text-muted">
            Belum ada program pada kategori ini.
          </p>
        )}
      </div>
    </div>
  );
}
