import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import { artikelList } from '@/data/artikel';

export function generateStaticParams() {
  return artikelList.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const artikel = artikelList.find((a) => a.slug === params.slug);
  return { title: artikel ? `${artikel.judul} — Artikel KKN 20` : 'Artikel tidak ditemukan' };
}

export default function ArtikelDetailPage({ params }: { params: { slug: string } }) {
  const artikel = artikelList.find((a) => a.slug === params.slug);
  if (!artikel) notFound();

  return (
    <Container className="max-w-3xl py-24">
      <Reveal>
        <Link
          href="/artikel"
          className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-gold"
        >
          <ArrowLeft size={16} /> Semua Artikel
        </Link>

        <p className="eyebrow mt-8">{artikel.kategori} · {artikel.tanggal}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {artikel.judul}
        </h1>
        <p className="mt-4 font-body text-sm text-muted">Ditulis oleh {artikel.penulis}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 aspect-[16/9] w-full rounded-2xl bg-ink-surface2 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.15),transparent_60%)]" />
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 space-y-5">
          {artikel.konten.map((p, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-cream/85">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
