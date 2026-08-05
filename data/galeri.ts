// Ganti "src" dengan path foto asli di /public/images/galeri/ setelah kamu upload dokumentasi.

export type FotoGaleri = {
  id: string;
  caption: string;
  kategori: 'Kegiatan' | 'Sosial' | 'Pendidikan' | 'Lingkungan' | 'Keseharian';
  src: string;
};

export const galeri: FotoGaleri[] = [
  { id: '1', caption: 'Penyambutan di Balai Desa Kabuaran', kategori: 'Kegiatan', src: '/images/gbr1.jpeg' },
  { id: '2', caption: 'Taman baca keliling bersama anak-anak', kategori: 'Pendidikan', src: '/app/galeri/placeholder-2.jpg' },
  { id: '3', caption: 'Pelatihan digital marketing UMKM', kategori: 'Kegiatan', src: '/images/galeri/placeholder-3.jpg' },
  { id: '4', caption: 'Kerja bakti bersama warga', kategori: 'Sosial', src: '/images/galeri/placeholder-4.jpg' },
  { id: '5', caption: 'Suasana kebun kopi Kabuaran', kategori: 'Keseharian', src: '/images/galeri/placeholder-5.jpg' },
  { id: '6', caption: 'Posyandu balita dan lansia', kategori: 'Kegiatan', src: '/images/galeri/placeholder-6.jpg' },
  { id: '7', caption: 'Plangisasi jalan desa', kategori: 'Lingkungan', src: '/images/galeri/placeholder-7.jpg' },
  { id: '8', caption: 'Kebersamaan Kelompok 20', kategori: 'Keseharian', src: '/images/galeri/placeholder-8.jpg' },
];
