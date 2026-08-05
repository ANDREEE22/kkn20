'use client';

import { useState } from 'react';
import type { Anggota } from '@/data/anggota';

export default function AnggotaCard({ anggota }: { anggota: Anggota }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="group relative w-full cursor-pointer"
      style={{
        perspective: '1000px',
        aspectRatio: '886 / 1299',
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full rounded-2xl border border-ink-border overflow-hidden bg-gradient-to-b from-ink/60 to-ink/40"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="w-full rounded-lg bg-ink/30 p-4 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold leading-snug text-cream">{anggota.nama}</p>
              <p className="mt-1 font-body text-sm text-muted">{anggota.jurusan}</p>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-gold">{anggota.peran}</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full rounded-2xl border border-ink-border overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={anggota.foto ?? '/images/gt1.png'}
            alt={`Lanyard ${anggota.nama}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
