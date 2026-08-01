import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import GaleriGrid from './galeri-grid';
import { galeri } from '@/data/galeri';

export const metadata = {
  title: 'Galeri — KKN Kelompok 20 Kabuaran',
};

export default function GaleriPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Dokumentasi</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Galeri Kegiatan
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          Momen-momen selama Kelompok 20 mengabdi di Desa Kabuaran.
        </p>
      </Reveal>

      <GaleriGrid items={galeri} />
    </Container>
  );
}
