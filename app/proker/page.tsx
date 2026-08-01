import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import ProkerGrid from './proker-grid';
import { prokerList } from '@/data/proker';

export const metadata = {
  title: 'Program Kerja — KKN Kelompok 20 Kabuaran',
};

export default function ProkerPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Program Kerja</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Semua Program Kerja
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          {prokerList.length} program yang dirancang untuk menjawab
          kebutuhan warga Desa Kabuaran di berbagai bidang.
        </p>
      </Reveal>

      <ProkerGrid items={prokerList} />
    </Container>
  );
}
