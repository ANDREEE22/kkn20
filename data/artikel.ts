export type Artikel = {
  slug: string;
  judul: string;
  ringkasan: string;
  konten: string[];
  penulis: string;
  tanggal: string;
  kategori: string;
};

export const artikelList: Artikel[] = [
  {
    slug: 'hari-pertama-di-kabuaran',
    judul: 'Hari Pertama Menginjakkan Kaki di Kabuaran',
    ringkasan: 'Cerita penyambutan Kelompok 20 oleh perangkat dan warga Desa Kabuaran.',
    konten: [
      'Perjalanan menuju Desa Kabuaran, Kecamatan Grujugan, ditempuh dengan jalur berkelok khas dataran tinggi Bondowoso. Udara sejuk dan hamparan kebun menyambut kedatangan Kelompok 20 di titik awal pengabdian selama beberapa minggu ke depan.',
      'Kepala desa beserta perangkat menyambut hangat di balai desa, dilanjutkan dengan perkenalan singkat program kerja yang telah disiapkan. Warga sekitar turut hadir, menandakan antusiasme yang besar terhadap kehadiran mahasiswa KKN tahun ini.',
      'Sesi hari pertama ditutup dengan survei lokasi bersama tokoh masyarakat, memetakan potensi dan tantangan yang akan menjadi dasar penyusunan program kerja selama masa KKN berlangsung.',
    ],
    penulis: 'Tim Dokumentasi',
    tanggal: 'Minggu ke-1',
    kategori: 'Cerita Lapangan',
  },
  {
    slug: 'potensi-kopi-kabuaran',
    judul: 'Mengenal Potensi Kopi di Dataran Tinggi Kabuaran',
    ringkasan: 'Menelusuri kebun kopi rakyat yang menjadi salah satu sumber penghidupan warga.',
    konten: [
      'Kecamatan Grujugan dikenal sebagai salah satu penghasil kopi robusta dan arabika di Kabupaten Bondowoso. Di Desa Kabuaran sendiri, sebagian besar warga menggantungkan sebagian penghasilan dari hasil kebun kopi rakyat yang dikelola turun-temurun.',
      'Sayangnya, proses pascapanen yang masih sederhana membuat nilai jual kopi belum optimal. Hal ini menjadi salah satu perhatian Kelompok 20 dalam merancang program pelatihan olahan kopi.',
      'Dengan pendampingan teknik roasting dan pengemasan yang lebih baik, harapannya kopi rakyat Kabuaran bisa naik kelas dan dikenal lebih luas di luar desa.',
    ],
    penulis: 'Divisi Humas',
    tanggal: 'Minggu ke-2',
    kategori: 'Potensi Desa',
  },
  {
    slug: 'keseruan-taman-baca-keliling',
    judul: 'Keseruan Taman Baca Keliling di Setiap Dusun',
    ringkasan: 'Antusiasme anak-anak Kabuaran menyambut program literasi dari Kelompok 20.',
    konten: [
      'Setiap akhir pekan, Kelompok 20 berkeliling dari satu dusun ke dusun lain membawa kotak berisi buku cerita, alat gambar, dan permainan edukatif. Program ini dirancang agar anak-anak yang jarak rumahnya jauh dari balai desa tetap bisa merasakan taman baca.',
      'Respons anak-anak sangat antusias, banyak yang menunggu kedatangan taman baca keliling sejak sore hari. Sesi mendongeng menjadi bagian favorit yang selalu dinanti setiap minggunya.',
    ],
    penulis: 'Divisi Acara',
    tanggal: 'Minggu ke-3',
    kategori: 'Cerita Lapangan',
  },
];
