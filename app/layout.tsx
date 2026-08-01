import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KKN Kelompok 20 — Desa Kabuaran, Grujugan, Bondowoso',
  description:
    'Kuliah Kerja Nyata Kelompok 20 di Desa Kabuaran, Kecamatan Grujugan, Kabupaten Bondowoso. Program kerja, kegiatan, dan dokumentasi pengabdian masyarakat.',
  keywords: ['KKN', 'Kelompok 20', 'Kabuaran', 'Grujugan', 'Bondowoso'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
