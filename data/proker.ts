export type Proker = {
  id: string;
  judul: string;
  kategori: 'Pendidikan' | 'Ekonomi' | 'Lingkungan' | 'Kesehatan' | 'Sosial';
  status: 'Selesai' | 'Berjalan' | 'Direncanakan';
  ringkasan: string;
  deskripsi: string;
  sasaran: string;
  lokasi: string;
  tanggal: string;
};

export const prokerList: Proker[] = [
  {
    id: 'pelatihan-digital-marketing-umkm',
    judul: 'Pelatihan Digital Marketing UMKM',
    kategori: 'Ekonomi',
    status: 'Berjalan',
    ringkasan: 'Pendampingan pelaku UMKM Desa Kabuaran memasarkan produk lewat media sosial dan marketplace.',
    deskripsi:
      'Program ini mendampingi pelaku UMKM di Desa Kabuaran untuk memahami dasar pemasaran digital, mulai dari pembuatan konten produk, pengelolaan akun media sosial, hingga pendaftaran di marketplace. Kelompok 20 memberikan pelatihan tatap muka sekaligus modul panduan yang bisa dipelajari mandiri setelah program KKN selesai.',
    sasaran: 'Pelaku UMKM dan ibu rumah tangga produktif',
    lokasi: 'Balai Desa Kabuaran',
    tanggal: 'Minggu ke-2 — 3',
  },
  {
    id: 'edukasi-gemar-membaca',
    judul: 'Gemar Membaca untuk Anak Desa',
    kategori: 'Pendidikan',
    status: 'Berjalan',
    ringkasan: 'Taman baca keliling dan sesi mendongeng untuk anak-anak SD di Kabuaran.',
    deskripsi:
      'Kelompok 20 menghadirkan taman baca sederhana yang berpindah dari satu dusun ke dusun lain di Desa Kabuaran, dilengkapi sesi mendongeng dan permainan edukatif untuk menumbuhkan minat baca anak-anak usia sekolah dasar.',
    sasaran: 'Anak-anak usia 6—12 tahun',
    lokasi: 'Dusun-dusun di Desa Kabuaran',
    tanggal: 'Setiap akhir pekan',
  },
  {
    id: 'bank-sampah-desa',
    judul: 'Inisiasi Bank Sampah Desa',
    kategori: 'Lingkungan',
    status: 'Direncanakan',
    ringkasan: 'Membentuk sistem pengelolaan sampah rumah tangga yang bernilai ekonomi.',
    deskripsi:
      'Bersama perangkat desa, program ini merancang sistem bank sampah agar warga bisa menabung sampah anorganik yang bernilai jual, sekaligus mengurangi volume sampah yang dibakar atau dibuang sembarangan di sekitar pemukiman.',
    sasaran: 'Warga Desa Kabuaran',
    lokasi: 'Balai Desa Kabuaran',
    tanggal: 'Minggu ke-4',
  },
  {
    id: 'posyandu-dan-cek-kesehatan',
    judul: 'Pendampingan Posyandu & Cek Kesehatan Gratis',
    kategori: 'Kesehatan',
    status: 'Selesai',
    ringkasan: 'Mendukung kegiatan posyandu balita dan lansia serta cek tekanan darah gratis.',
    deskripsi:
      'Kelompok 20 membantu kader posyandu dalam pencatatan tumbuh kembang balita dan menyelenggarakan pemeriksaan kesehatan dasar gratis bagi lansia, termasuk cek tekanan darah dan edukasi pola hidup sehat.',
    sasaran: 'Balita, ibu hamil, dan lansia',
    lokasi: 'Posyandu Dusun Krajan',
    tanggal: 'Minggu ke-1',
  },
  {
    id: 'kerja-bakti-dan-plangisasi',
    judul: 'Kerja Bakti & Plangisasi Jalan Desa',
    kategori: 'Sosial',
    status: 'Selesai',
    ringkasan: 'Gotong royong membersihkan fasilitas umum dan memasang papan penunjuk arah.',
    deskripsi:
      'Sebagai bentuk kolaborasi langsung dengan warga, Kelompok 20 mengadakan kerja bakti membersihkan fasilitas umum sekaligus memasang plang penunjuk arah dan nama dusun agar memudahkan mobilitas warga maupun pengunjung.',
    sasaran: 'Seluruh warga Desa Kabuaran',
    lokasi: 'Jalan utama Desa Kabuaran',
    tanggal: 'Minggu ke-1 — 2',
  },
  {
    id: 'pelatihan-olahan-kopi',
    judul: 'Pelatihan Olahan Kopi Rakyat',
    kategori: 'Ekonomi',
    status: 'Direncanakan',
    ringkasan: 'Meningkatkan nilai jual kopi lokal lewat teknik roasting dan pengemasan sederhana.',
    deskripsi:
      'Mengingat potensi kopi rakyat di dataran tinggi Bondowoso, program ini mengenalkan teknik roasting skala kecil dan pengemasan yang lebih menarik kepada petani kopi di sekitar Desa Kabuaran, agar produk mereka punya nilai jual lebih tinggi.',
    sasaran: 'Petani kopi Desa Kabuaran',
    lokasi: 'Rumah produksi warga',
    tanggal: 'Minggu ke-5',
  },
];
