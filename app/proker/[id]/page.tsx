import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import Container from '@/components/ui/container';
import Badge from '@/components/ui/badge';
import Reveal from '@/components/ui/reveal';
import { prokerList } from '@/data/proker';

export function generateStaticParams() {
  return prokerList.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const proker = prokerList.find((p) => p.id === params.id);
  return { title: proker ? `${proker.judul} — Proker KKN 20` : 'Proker tidak ditemukan' };
}

export default function ProkerDetailPage({ params }: { params: { id: string } }) {
  const proker = prokerList.find((p) => p.id === params.id);
  if (!proker) notFound();

  return (
    <Container className="py-24">
      <Reveal>
        <Link
          href="/proker"
          className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-gold"
        >
          <ArrowLeft size={16} /> Semua Program Kerja
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge tone={proker.status === 'Selesai' ? 'green' : 'gold'}>{proker.status}</Badge>
          <Badge tone="neutral">{proker.kategori}</Badge>
        </div>

        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {proker.judul}
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_0.55fr]">
        <Reveal delay={0.05}>
          <p className="font-body text-lg leading-relaxed text-cream/85">{proker.deskripsi}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 rounded-2xl border border-ink-border bg-ink-soft p-6">
            <div className="flex items-start gap-3">
              <Users size={18} className="mt-0.5 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Sasaran</p>
                <p className="mt-1 font-body text-sm text-cream/90">{proker.sasaran}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Lokasi</p>
                <p className="mt-1 font-body text-sm text-cream/90">{proker.lokasi}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={18} className="mt-0.5 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Waktu Pelaksanaan</p>
                <p className="mt-1 font-body text-sm text-cream/90">{proker.tanggal}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
