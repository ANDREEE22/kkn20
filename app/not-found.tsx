import Link from 'next/link';
import Container from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 max-w-md font-body text-base text-muted">
        Sepertinya jalan yang kamu tuju belum kami petakan. Coba kembali ke
        beranda.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
      >
        Kembali ke Beranda
      </Link>
    </Container>
  );
}
