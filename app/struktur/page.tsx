import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import { strukturOrganisasi } from '@/data/struktur';

export const metadata = {
  title: 'Struktur Organisasi — KKN Kelompok 20 Kabuaran',
};

export default function StrukturPage() {
  const dpl = strukturOrganisasi.filter((n) => n.level === 0);
  const inti = strukturOrganisasi.filter((n) => n.level === 1);
  const divisi = strukturOrganisasi.filter((n) => n.level === 2);

  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Organisasi</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Struktur Kelompok 20
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          Susunan kepengurusan yang mengatur jalannya seluruh program kerja
          selama masa KKN di Desa Kabuaran.
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col items-center gap-4">
        {dpl.map((n) => (
          <Reveal key={n.jabatan}>
            <div className="rounded-2xl border border-gold/40 bg-gold/5 px-8 py-5 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-gold">{n.jabatan}</p>
              <p className="mt-1 font-display text-xl font-semibold">{n.nama}</p>
            </div>
          </Reveal>
        ))}

        <div className="h-10 w-px bg-ink-border" />

        <div className="grid w-full gap-4 sm:grid-cols-2 sm:max-w-xl">
          {inti.map((n, i) => (
            <Reveal key={n.jabatan} delay={i * 0.1}>
              <div className="rounded-2xl border border-ink-border bg-ink-soft px-6 py-5 text-center">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{n.jabatan}</p>
                <p className="mt-1 font-display text-lg font-semibold">{n.nama}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="h-10 w-px bg-ink-border" />

        <div className="grid w-full gap-4 sm:grid-cols-3">
          {divisi.map((n, i) => (
            <Reveal key={n.jabatan} delay={i * 0.08}>
              <div className="rounded-2xl border border-ink-border bg-ink-soft px-6 py-5 text-center">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">{n.jabatan}</p>
                <p className="mt-1 font-display text-base font-semibold text-terrace-soft">
                  {n.nama}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}
