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
  { id: '01', nama: 'Rio', jurusan: 'Ganti sesuai jurusan', peran: 'Koordinator Desa', inisial: 'R', foto: '/images/gt1.png' },
  { id: '02', nama: 'Febi', jurusan: 'Ganti sesuai jurusan', peran: 'Wakil Koordinator Desa', inisial: 'F', foto: '/images/gt2.png' },
  { id: '03', nama: 'Novia', jurusan: 'Ganti sesuai jurusan', peran: 'Sekretaris', inisial: 'N', foto: '/images/gt3.png' },
  { id: '04', nama: 'Nurul', jurusan: 'Ganti sesuai jurusan', peran: 'Sekretaris', inisial: 'NU', foto: '/images/gt4.png' },
  { id: '05', nama: 'Holif', jurusan: 'Ganti sesuai jurusan', peran: 'Bendahara', inisial: 'H', foto: '/images/gt5.png' },
  { id: '06', nama: 'Nabila', jurusan: 'Ganti sesuai jurusan', peran: 'Bendahara', inisial: 'NB', foto: '/images/gt6.png' },

  { id: '07', nama: 'Ryan', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Acara', inisial: 'RY', foto: '/images/gt7.png' },
  { id: '08', nama: 'Andre', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Acara', inisial: 'AD', foto: '/images/gt8.png' },
  { id: '09', nama: 'Sherly', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Acara', inisial: 'SH', foto: '/images/gt9.png' },
  { id: '10', nama: 'Nadia', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Acara', inisial: 'ND', foto: '/images/gt10.png' },

  { id: '11', nama: 'Naufal', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Humas', inisial: 'NF', foto: '/images/gt11.png' },
  { id: '12', nama: 'Irma', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Humas', inisial: 'IR', foto: '/images/gt12.png' },
  { id: '13', nama: 'Arjuna', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Humas', inisial: 'AR', foto: '/images/gt13.png' },

  { id: '14', nama: 'Ageng', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Perlengkapan', inisial: 'AG', foto: '/images/gt14.png' },
  { id: '15', nama: 'Agung', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Perlengkapan', inisial: 'AU', foto: '/images/gt15.png' },

  { id: '16', nama: 'Zahra', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi PDD', inisial: 'ZH', foto: '/images/gt16.png' },
  { id: '17', nama: 'Reza', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi PDD', inisial: 'RZ', foto: '/images/gt17.png' },
  { id: '18', nama: 'Brian', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi PDD', inisial: 'BR', foto: '/images/gt18.png' },

  { id: '19', nama: 'Riska', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Konsumsi', inisial: 'RS', foto: '/images/gt19.png' },
  { id: '20', nama: 'Sesanti', jurusan: 'Ganti sesuai jurusan', peran: 'Divisi Konsumsi', inisial: 'SS', foto: '/images/gt20.png' },
];