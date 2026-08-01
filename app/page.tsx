import Link from 'next/link';
import { ArrowUpRight, MapPin, Users, Sprout } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import Badge from '@/components/ui/badge';
import Reveal from '@/components/ui/reveal';
import ContourField from '@/components/sections/contour-field';
import { prokerList } from '@/data/proker';
import { artikelList } from '@/data/artikel';
import { anggota } from '@/data/anggota';

export default function Beranda() {
  const prokerUnggulan = prokerList.slice(0, 3);
  const artikelTerbaru = artikelList.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-border">
        <ContourField />
        <Container className="relative flex min-h-[86vh] flex-col justify-center py-24">
          <p className="eyebrow animate-fade-up">Kuliah Kerja Nyata · Kelompok 20</p>
          <h1 className="mt-5 max-w-3xl animate-fade-up font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Mengabdi di dataran tinggi{' '}
            <span className="italic text-gold">Kabuaran.</span>
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up font-body text-lg leading-relaxed text-muted" style={{ animationDelay: '0.15s' }}>
            Kelompok 20 hadir di Desa Kabuaran, Kecamatan Grujugan, Kabupaten
            Bondowoso — merancang program kerja bersama warga di bidang
            pendidikan, ekonomi, kesehatan, dan lingkungan.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/proker"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Lihat Program Kerja
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-3 font-body text-sm text-cream/90 transition-colors hover:border-gold hover:text-gold"
            >
              Tentang Kelompok Kami
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-ink-border pt-8 sm:grid-cols-4">
            {[
              { label: 'Anggota Tim', value: `${anggota.length} Orang`, icon: Users },
              { label: 'Program Kerja', value: `${prokerList.length} Program`, icon: Sprout },
              { label: 'Kecamatan', value: 'Grujugan', icon: MapPin },
              { label: 'Kabupaten', value: 'Bondowoso', icon: MapPin },
            ].map((s) => (
              <div key={s.label}>
                <s.icon size={18} className="text-gold" />
                <p className="mt-3 font-display text-2xl font-semibold">{s.value}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TENTANG SINGKAT */}
      <section className="border-b border-ink-border py-24">
        <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Tentang Lokasi"
              title="Desa Kabuaran, tanah subur di lereng dataran tinggi Bondowoso"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-base leading-relaxed text-cream/80">
              Terletak di Kecamatan Grujugan, Desa Kabuaran dikenal dengan
              hamparan kebun kopi rakyat dan lahan pertanian yang menjadi
              tumpuan hidup sebagian besar warganya. Selama masa KKN,
              Kelompok 20 tinggal dan berbaur langsung dengan warga untuk
              memahami kebutuhan nyata di lapangan sebelum merancang program
              kerja.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/80">
              Kegiatan ini berada di bawah bimbingan{' '}
              <span className="text-gold">Bapak Danang</span> selaku Dosen
              Pembimbing Lapangan (DPL), yang mendampingi kelompok sejak tahap
              perencanaan hingga evaluasi akhir program.
            </p>
            <Link
              href="/tentang"
              className="mt-6 inline-flex items-center gap-1 font-body text-sm text-gold hover:underline"
            >
              Baca selengkapnya <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* PROKER UNGGULAN */}
      <section className="border-b border-ink-border py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Program Kerja"
                title="Fokus pengabdian Kelompok 20"
                description="Lima bidang utama yang menjadi arah program kerja selama masa KKN berlangsung."
              />
              <Link
                href="/proker"
                className="inline-flex items-center gap-1 font-body text-sm text-gold hover:underline"
              >
                Semua Program <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {prokerUnggulan.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.1}>
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
                    {p.kategori}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ARTIKEL TERBARU */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Cerita Lapangan"
                title="Catatan dari Kabuaran"
                description="Dokumentasi perjalanan dan cerita di balik setiap kegiatan Kelompok 20."
              />
              <Link
                href="/artikel"
                className="inline-flex items-center gap-1 font-body text-sm text-gold hover:underline"
              >
                Semua Artikel <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {artikelTerbaru.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1}>
                <Link href={`/artikel/${a.slug}`} className="group block">
                  <div className="aspect-[4/3] w-full rounded-2xl bg-ink-surface2 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.15),transparent_60%)]" />
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
                    {a.kategori} · {a.tanggal}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-gold">
                    {a.judul}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
