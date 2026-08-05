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
    id: 'sosialisasi-pengelolaan-sampah-sdn2-kabuaran',
    judul: 'Sosialisasi Pengelolaan Sampah dan Pembuatan Plang Edukasi',
    kategori: 'Pendidikan',
    status: 'Selesai',
    ringkasan: 'Edukasi pengelolaan sampah serta pemasangan plang informasi waktu terurai sampah di SDN 2 Kabuaran.',
    deskripsi:
      'Program ini bertujuan meningkatkan kesadaran siswa SDN 2 Kabuaran terhadap pentingnya menjaga kebersihan lingkungan melalui sosialisasi pengelolaan sampah. Mahasiswa KKN Tematik Universitas Muhammadiyah Jember Kelompok 20 memberikan edukasi mengenai jenis-jenis sampah, cara memilah sampah, serta dampaknya terhadap lingkungan. Selain itu, dipasang plang edukasi yang memuat informasi mengenai waktu terurai berbagai jenis sampah, seperti botol plastik, kaleng, kertas, dan bahan lainnya, sehingga siswa dapat lebih memahami pentingnya mengurangi sampah dan menjaga kelestarian lingkungan.',
    sasaran: 'Siswa dan guru SDN 2 Kabuaran',
    lokasi: 'SDN 2 Kabuaran',
    tanggal: 'Minggu ke-1',
  },
  {
    id: 'sosialisasi-pupuk-kompos-organik-cair',
    judul: 'Sosialisasi Pupuk Kompos Organik Cair',
    kategori: 'Lingkungan',
    status: 'Berjalan',
    ringkasan: 'Sosialisasi dan pelatihan pembuatan pupuk kompos organik cair (POC) dari kotoran sapi kepada kelompok tani dan masyarakat Desa Kabuaran.',
    deskripsi:
      'Program ini bertujuan meningkatkan pengetahuan dan keterampilan kelompok tani serta masyarakat Desa Kabuaran dalam mengolah kotoran sapi menjadi pupuk kompos organik cair (POC) yang ramah lingkungan dan bernilai ekonomis. Kegiatan dilaksanakan di Balai Desa Kabuaran dengan penyampaian materi, demonstrasi proses pembuatan POC, serta sesi tanya jawab bersama peserta yang dihadiri oleh perangkat desa, Kepala Dusun (Kasun), kelompok tani, dan warga sekitar.',
    sasaran: 'Kelompok tani dan masyarakat Desa Kabuaran',
    lokasi: 'Balai Desa Kabuaran',
    tanggal: 'Minggu ke-2',
  },
  {
    id: 'pembuatan-plang-jalan-desa-kabuaran',
    judul: 'Pembuatan Plang Jalan 4 Dusun',
    kategori: 'Lingkungan',
    status: 'Selesai',
    ringkasan: 'Pembuatan dan pemasangan plang penunjuk jalan di empat dusun Desa Kabuaran untuk memudahkan akses masyarakat dan pengunjung.',
    deskripsi:
      'Program ini bertujuan meningkatkan kemudahan akses informasi lokasi di Desa Kabuaran melalui pembuatan dan pemasangan plang penunjuk jalan pada empat dusun. Mahasiswa KKN Tematik Universitas Muhammadiyah Jember Kelompok 20 bersama perangkat desa dan masyarakat melakukan survei lokasi, pembuatan desain plang, hingga pemasangan di titik-titik strategis. Dengan adanya plang jalan ini, masyarakat maupun pendatang diharapkan lebih mudah menemukan arah menuju setiap dusun serta meningkatkan kerapian dan identitas wilayah Desa Kabuaran.',
    sasaran: 'Masyarakat Desa Kabuaran dan pengunjung',
    lokasi: 'Empat Dusun di Desa Kabuaran',
    tanggal: 'Minggu ke-2 - 3',
  },
  {
    id: 'lomba-agustusan-desa-kabuaran',
    judul: 'Lomba Agustusan',
    kategori: 'Sosial',
    status: 'Direncanakan',
    ringkasan: 'Pelaksanaan berbagai perlombaan dalam rangka memeriahkan Hari Kemerdekaan Republik Indonesia bersama masyarakat Desa Kabuaran.',
    deskripsi:
      'Mahasiswa KKN Tematik Universitas Muhammadiyah Jember Kelompok 20 berkolaborasi dengan masyarakat menyelenggarakan berbagai lomba Agustusan sebagai bentuk perayaan Hari Kemerdekaan Republik Indonesia. Kegiatan dilaksanakan di halaman rumah Bapak Halili dengan melibatkan anak-anak, remaja, hingga warga sekitar. Selain menjadi ajang hiburan, kegiatan ini bertujuan mempererat kebersamaan, meningkatkan semangat gotong royong, dan memperkuat tali silaturahmi antarwarga.',
    sasaran: 'Anak-anak, remaja, dan masyarakat Desa Kabuaran',
    lokasi: 'Halaman Rumah Bapak Halili, Desa Kabuaran',
    tanggal: 'Minggu ke-3',
  },
  {
    id: 'penanaman-asman-toga-kampung-jawa',
    judul: 'Penanaman Tanaman ASMAN TOGA',
    kategori: 'Lingkungan',
    status: 'Direncanakan',
    ringkasan: 'Penanaman tanaman ASMAN TOGA (Asuhan Mandiri Tanaman Obat Keluarga) bersama masyarakat di Kampung Jawa.',
    deskripsi:
      'Mahasiswa KKN Tematik Universitas Muhammadiyah Jember Kelompok 20 melaksanakan kegiatan penanaman tanaman ASMAN TOGA (Asuhan Mandiri Tanaman Obat Keluarga) di Kampung Jawa, Desa Kabuaran. Kegiatan ini bertujuan meningkatkan kesadaran masyarakat akan pentingnya pemanfaatan tanaman obat keluarga sebagai upaya menjaga kesehatan secara mandiri sekaligus menciptakan lingkungan yang lebih hijau dan asri. Penanaman dilakukan bersama warga sebagai bentuk kolaborasi dalam mendukung program pelestarian lingkungan dan kesehatan masyarakat.',
    sasaran: 'Masyarakat Kampung Jawa, Desa Kabuaran',
    lokasi: 'Kampung Jawa, Desa Kabuaran',
    tanggal: 'Minggu ke-3 - 4',
  },
  
];
