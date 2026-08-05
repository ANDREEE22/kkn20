'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Reveal from '@/components/ui/reveal';
import { cn } from '@/lib/utils';
import type { FotoGaleri } from '@/data/galeri';

const kategoriList = ['Semua', 'Kegiatan', 'Sosial', 'Pendidikan', 'Lingkungan', 'Keseharian'] as const;

export default function GaleriGrid({ items }: { items: FotoGaleri[] }) {
  const [filter, setFilter] = useState<(typeof kategoriList)[number]>('Semua');
  const [selected, setSelected] = useState<FotoGaleri | null>(null);

  const filtered = filter === 'Semua' ? items : items.filter((g) => g.kategori === filter);

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

      <div className="mt-10 columns-2 gap-4 sm:columns-3">
        {filtered.map((g, i) => (
          <Reveal key={g.id} delay={(i % 9) * 0.05} className="mb-4 break-inside-avoid">
            <button
              onClick={() => setSelected(g)}
              className="group relative block w-full overflow-hidden rounded-xl border border-ink-border"
            >
              {g.src ? (
                <img
                  src={g.src}
                  alt={g.caption}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex aspect-square w-full items-center justify-center bg-ink-surface2 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.15),transparent_60%)] text-center font-body text-xs text-muted"
                >
                  <span className="px-4">{g.caption}</span>
                </div>
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="font-body text-xs text-cream">{g.caption}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream hover:text-gold"
            onClick={() => setSelected(null)}
            aria-label="Tutup"
          >
            <X size={28} />
          </button>
          <div className="max-w-xl text-center">
            <img
              src={selected.src}
              alt={selected.caption}
              className="w-full max-h-[80vh] rounded-xl object-contain"
            />
            <p className="mt-4 font-body text-sm text-cream/90">{selected.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
