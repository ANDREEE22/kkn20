import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import AnggotaCard from '@/components/anggota/anggota-card';
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
            <AnggotaCard anggota={a} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
