import { MapPin, Mail, Instagram } from 'lucide-react';
import TikTokIcon from '@/components/icons/tiktok';
import Container from '@/components/ui/container';
import Reveal from '@/components/ui/reveal';
import ContactForm from './contact-form';

export const metadata = {
  title: 'Kontak — KKN Kelompok 20 Kabuaran',
};

export default function KontakPage() {
  return (
    <Container className="py-24">
      <Reveal>
        <p className="eyebrow">Hubungi Kami</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Mari Terhubung
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted">
          Ada pertanyaan, masukan, atau ingin berkolaborasi dengan Kelompok
          20? Kirim pesan lewat form di bawah atau hubungi kami langsung.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal delay={0.05}>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Lokasi</p>
                <p className="mt-1 font-body text-sm text-cream/90">
                  Desa Kabuaran, Kecamatan Grujugan, Kabupaten Bondowoso, Jawa Timur
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Email</p>
                <a
                  href="mailto:kkn20kabuaran@gmail.com"
                  className="mt-1 block font-body text-sm text-cream/90 transition-colors hover:text-gold"
                >
                  kkn20kabuaran@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TikTokIcon size={18} className="mt-1 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">TikTok</p>
                <a
                  href="https://www.tiktok.com/kkn20kabuaran"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block font-body text-sm text-cream/90 transition-colors hover:text-gold">kkn20kabuaran
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Instagram size={18} className="mt-1 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Instagram</p>
                <a
                  href="https://www.instagram.com/kkn20_kabuaran"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block font-body text-sm text-cream/90 transition-colors hover:text-gold"
                >
                  kkn20_kabuaran
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Container>
  );
}
