// Ganti nama, jurusan, dan peran sesuai anggota kelompok kamu yang sebenarnya.
// "inisial" dipakai untuk avatar teks kalau belum ada foto.

export type Anggota = {
  id: string;
  nama: string;
  jurusan: string;
  peran: string;
  inisial: string;
  foto?: string;
};

export const dpl = {
  nama: 'Bapak Danang',
  peran: 'Dosen Pembimbing Lapangan (DPL)',
};

export const anggota: Anggota[] = [
  { id: '01', nama: 'Ketua Kelompok', jurusan: 'Ganti sesuai data', peran: 'Ketua', inisial: 'KK' },
  { id: '02', nama: 'Wakil Ketua', jurusan: 'Ganti sesuai data', peran: 'Wakil Ketua', inisial: 'WK' },
  { id: '03', nama: 'Sekretaris 1', jurusan: 'Ganti sesuai data', peran: 'Sekretaris', inisial: 'S1' },
  { id: '04', nama: 'Sekretaris 2', jurusan: 'Ganti sesuai data', peran: 'Sekretaris', inisial: 'S2' },
  { id: '05', nama: 'Bendahara 1', jurusan: 'Ganti sesuai data', peran: 'Bendahara', inisial: 'B1' },
  { id: '06', nama: 'Bendahara 2', jurusan: 'Ganti sesuai data', peran: 'Bendahara', inisial: 'B2' },
  { id: '07', nama: 'Anggota 07', jurusan: 'Ganti sesuai data', peran: 'Divisi Acara', inisial: 'A7' },
  { id: '08', nama: 'Anggota 08', jurusan: 'Ganti sesuai data', peran: 'Divisi Acara', inisial: 'A8' },
  { id: '09', nama: 'Anggota 09', jurusan: 'Ganti sesuai data', peran: 'Divisi Acara', inisial: 'A9' },
  { id: '10', nama: 'Anggota 10', jurusan: 'Ganti sesuai data', peran: 'Divisi Humas', inisial: 'A10' },
  { id: '11', nama: 'Anggota 11', jurusan: 'Ganti sesuai data', peran: 'Divisi Humas', inisial: 'A11' },
  { id: '12', nama: 'Anggota 12', jurusan: 'Ganti sesuai data', peran: 'Divisi Humas', inisial: 'A12' },
  { id: '13', nama: 'Anggota 13', jurusan: 'Ganti sesuai data', peran: 'Divisi Perlengkapan', inisial: 'A13' },
  { id: '14', nama: 'Anggota 14', jurusan: 'Ganti sesuai data', peran: 'Divisi Perlengkapan', inisial: 'A14' },
  { id: '15', nama: 'Anggota 15', jurusan: 'Ganti sesuai data', peran: 'Divisi Perlengkapan', inisial: 'A15' },
  { id: '16', nama: 'Anggota 16', jurusan: 'Ganti sesuai data', peran: 'Divisi Dokumentasi', inisial: 'A16' },
  { id: '17', nama: 'Anggota 17', jurusan: 'Ganti sesuai data', peran: 'Divisi Dokumentasi', inisial: 'A17' },
  { id: '18', nama: 'Anggota 18', jurusan: 'Ganti sesuai data', peran: 'Divisi Konsumsi', inisial: 'A18' },
  { id: '19', nama: 'Anggota 19', jurusan: 'Ganti sesuai data', peran: 'Divisi Konsumsi', inisial: 'A19' },
  { id: '20', nama: 'Anggota 20', jurusan: 'Ganti sesuai data', peran: 'Divisi Konsumsi', inisial: 'A20' },
];
