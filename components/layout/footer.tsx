import Link from 'next/link';
import { MapPin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">
            KKN <span className="text-gold">Kelompok 20</span>
          </p>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-muted">
            Kuliah Kerja Nyata di Desa Kabuaran, Kecamatan Grujugan, Kabupaten
            Bondowoso — mengabdi, belajar, dan tumbuh bersama warga desa.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigasi</p>
          <ul className="grid grid-cols-2 gap-2 font-body text-sm text-cream/80">
            <li><Link href="/tentang" className="hover:text-gold">Tentang</Link></li>
            <li><Link href="/struktur" className="hover:text-gold">Struktur</Link></li>
            <li><Link href="/anggota" className="hover:text-gold">Anggota</Link></li>
            <li><Link href="/proker" className="hover:text-gold">Proker</Link></li>
            <li><Link href="/artikel" className="hover:text-gold">Artikel</Link></li>
            <li><Link href="/galeri" className="hover:text-gold">Galeri</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Kontak & Lokasi</p>
          <ul className="space-y-3 font-body text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              Desa Kabuaran, Kec. Grujugan, Kab. Bondowoso, Jawa Timur
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold" />
              kkn20kabuaran@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} className="shrink-0 text-gold" />
              @kkn20.kabuaran
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border px-6 py-5 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} KKN Kelompok 20 · Desa Kabuaran, Grujugan, Bondowoso
      </div>
    </footer>
  );
}
