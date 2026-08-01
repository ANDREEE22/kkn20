import { MapPin, Target, Eye } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import Reveal from '@/components/ui/reveal';

export const metadata = {
  title: 'Tentang — KKN Kelompok 20 Kabuaran',
};

export default function TentangPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Tentang Kami</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Kuliah Kerja Nyata Kelompok 20
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          Program pengabdian masyarakat yang ditempatkan di Desa Kabuaran,
          Kecamatan Grujugan, Kabupaten Bondowoso, Jawa Timur — dibimbing
          langsung oleh Bapak Danang selaku Dosen Pembimbing Lapangan.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <Reveal>
          <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
            <MapPin className="text-gold" size={20} />
            <p className="mt-4 font-display text-lg font-semibold">Lokasi</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">
              Desa Kabuaran, Kecamatan Grujugan, Kabupaten Bondowoso
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
            <Target className="text-gold" size={20} />
            <p className="mt-4 font-display text-lg font-semibold">Misi</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">
              Menjalankan program kerja yang relevan dengan kebutuhan nyata
              warga desa di bidang pendidikan, ekonomi, kesehatan, dan
              lingkungan.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-ink-border bg-ink-soft p-6">
            <Eye className="text-gold" size={20} />
            <p className="mt-4 font-display text-lg font-semibold">Visi</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">
              Menjadi jembatan antara ilmu di kampus dan kebutuhan nyata
              masyarakat, meninggalkan dampak yang berkelanjutan bagi Desa
              Kabuaran.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Latar Belakang"
            title="Mengapa Kabuaran?"
          />
          <p className="mt-4 font-body text-base leading-relaxed text-cream/80">
            Desa Kabuaran dipilih sebagai lokasi KKN karena potensi
            agrarisnya yang besar, khususnya di sektor kopi dan pertanian,
            namun masih menghadapi tantangan dalam hal pemasaran produk,
            literasi anak, dan pengelolaan lingkungan. Kelompok 20 hadir
            untuk mendampingi warga menjawab tantangan tersebut melalui
            pendekatan partisipatif.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Pendekatan"
            title="Bagaimana kami bekerja"
          />
          <p className="mt-4 font-body text-base leading-relaxed text-cream/80">
            Setiap program kerja disusun berdasarkan hasil survei dan diskusi
            langsung dengan perangkat desa serta tokoh masyarakat. Kelompok
            20 dibagi ke dalam beberapa divisi agar setiap kegiatan dapat
            berjalan efektif, mulai dari perencanaan, pelaksanaan, hingga
            evaluasi bersama Dosen Pembimbing Lapangan.
          </p>
        </Reveal>
      </div>
    </Container>
  );
}
