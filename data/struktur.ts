export type NodeStruktur = {
  jabatan: string;
  nama: string;
  level: 0 | 1 | 2;
};

export const strukturOrganisasi: NodeStruktur[] = [
  { jabatan: 'Dosen Pembimbing Lapangan', nama: 'Bapak Danang', level: 0 },

  { jabatan: 'Koordinator Desa (Kordes)', nama: 'Rio', level: 1 },
  { jabatan: 'Wakil Koordinator Desa', nama: 'Febi', level: 1 },

  { jabatan: 'Sekretaris', nama: 'Novia & Nurul', level: 2 },
  { jabatan: 'Bendahara', nama: 'Holif & Nabila', level: 2 },

  { jabatan: 'Divisi Acara', nama: 'Ryan, Andre, Sherly & Nadia', level: 2 },
  { jabatan: 'Divisi Humas', nama: 'Naufal, Irma & Arjuna', level: 2 },
  { jabatan: 'Divisi Perlengkapan', nama: 'Ageng & Agung', level: 2 },
  { jabatan: 'Divisi PDD', nama: 'Zahra, Reza & Brian', level: 2 },
  { jabatan: 'Divisi Konsumsi', nama: 'Riska & Sesanti', level: 2 },
];