export type NodeStruktur = {
  jabatan: string;
  nama: string;
  level: 0 | 1 | 2;
};

export const strukturOrganisasi: NodeStruktur[] = [
  { jabatan: 'Dosen Pembimbing Lapangan', nama: 'Bapak Danang', level: 0 },
  { jabatan: 'Ketua Kelompok', nama: 'Ketua Kelompok', level: 1 },
  { jabatan: 'Wakil Ketua', nama: 'Wakil Ketua', level: 1 },
  { jabatan: 'Sekretaris', nama: 'Sekretaris 1 & 2', level: 2 },
  { jabatan: 'Bendahara', nama: 'Bendahara 1 & 2', level: 2 },
  { jabatan: 'Divisi Acara', nama: '3 anggota', level: 2 },
  { jabatan: 'Divisi Humas', nama: '3 anggota', level: 2 },
  { jabatan: 'Divisi Perlengkapan', nama: '3 anggota', level: 2 },
  { jabatan: 'Divisi Dokumentasi', nama: '2 anggota', level: 2 },
  { jabatan: 'Divisi Konsumsi', nama: '3 anggota', level: 2 },
];
