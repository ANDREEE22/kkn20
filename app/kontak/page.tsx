import { MapPin, Mail, Instagram, Phone } from 'lucide-react';
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
                <p className="mt-1 font-body text-sm text-cream/90">kkn20kabuaran@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Sekretariat</p>
                <p className="mt-1 font-body text-sm text-cream/90">+62 8xx-xxxx-xxxx</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Instagram size={18} className="mt-1 text-gold" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">Instagram</p>
                <p className="mt-1 font-body text-sm text-cream/90">@kkn20.kabuaran</p>
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
