import Link from 'next/link';
import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import { artikelList } from '@/data/artikel';

export const metadata = {
  title: 'Artikel — KKN Kelompok 20 Kabuaran',
};

export default function ArtikelPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Cerita Lapangan</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Catatan dari Kabuaran
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          Dokumentasi cerita, pembelajaran, dan momen di balik setiap
          kegiatan Kelompok 20 selama masa KKN.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artikelList.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 6) * 0.06}>
            <Link href={`/artikel/${a.slug}`} className="group block">
              <div className="aspect-[4/3] w-full rounded-2xl bg-ink-surface2 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.15),transparent_60%)]" />
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
                {a.kategori} · {a.tanggal}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-gold">
                {a.judul}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{a.ringkasan}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
