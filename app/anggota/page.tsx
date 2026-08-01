import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import { anggota, dpl } from '@/data/anggota';

export const metadata = {
  title: 'Anggota — KKN Kelompok 20 Kabuaran',
};

export default function AnggotaPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Tim Kami</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          20 Anggota Kelompok 20
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          Dibimbing oleh <span className="text-gold">{dpl.nama}</span> selaku{' '}
          {dpl.peran}, berikut seluruh anggota yang menjalankan program kerja
          di Desa Kabuaran.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {anggota.map((a, i) => (
          <Reveal key={a.id} delay={(i % 4) * 0.08}>
            <div className="group rounded-2xl border border-ink-border bg-ink-soft p-6 transition-colors hover:border-gold/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-display text-lg font-semibold text-gold">
                {a.inisial}
              </div>
              <p className="mt-4 font-display text-base font-semibold leading-snug">
                {a.nama}
              </p>
              <p className="mt-1 font-body text-sm text-muted">{a.jurusan}</p>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-terrace-soft">
                {a.peran}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
