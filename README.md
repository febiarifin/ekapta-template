# Template Ekapta

link demo : https://febiarifin.github.io/ekapta-template

## Menu aplikasi

```
S = Search
C = Create
R = Read
U = Update
D = Delete
```

### Mahasiswa

- Login
- Dashboard
  - Disajikan alur pengajuan judul TA, pendaftaran TA, pendaftaran SPTA, dan pendaftaran UPTA
- Pengajuan TA
  - Form pengajuan TA (C)
    - Judul TA
    - Deskripsi
    - Upload file
  - Disajikan dalam bentuk tabel (SCRUD)
    - Status : Diterima, revisi, ditolak
  - Mencetak Lembar Persetujuan Pembimbing
- Pendaftaran TA
  - Mengisi formulir pendaftaran (C)
    - Upload beberapa dokumen (?) termasuk lembar persetujuan calon dosen pembimbing yang sudah ditandatangani
  - Disajikan dalam bentuk tabel (SCRUD)
    - Status : Diterima, revisi
- Bimbingan
  - Form Memulai bimbingan
    - Memilih bagian bimbingan
    - Upload file
  - Disajikan dalam bentuk tabel (SCRUD)
    - Status : Diterima, revisi
- Seminar Proposal
  - Disajikan dalam bentuk tabel (SCRUD)
    - Status : Diterima, revisi
  - Mengisi formulir pendaftaran
  - Upload file bimbingan revisi seminar proposal
- Ujian Pendadaran
  - Disajikan dalam bentuk tabel (SCRUD)
    - Status : Diterima, revisi
  - Mengisi formulir pendaftaran
  - Upload file bimbingan revisi seminar proposal
- Logout

### Prodi

- Login
- Dashboard
- Pengjuan TA
  - Disajikan dalam bentuk tabel (SU)
    - Status : Diterima, revisi, ditolak
  - Form Update (U)
    - catatan review
    - status ajuan (Diterima, revisi, ditolak)
  - Menentukan calon pembimbing (CU)
- Bimbingan
  - Disajikan dalam bentuk tabel (SR)
    - Status : Diterima, revisi
- Seminar Proposal
  - Disajikan dalam bentuk tabel (SR)
    - Status : Diterima, revisi
    - Nilai dari dosen pembimbing dan penguji
- Ujian Pendadaran
  - Disajikan dalam bentuk tabel (SR)
    - Status : Diterima, revisi
    - Nilai dari dosen pembimbing dan penguji
- Logout

### Dosen

- Login
- Dashboard
- Bimbingan
  - Disajikan dalam bentuk tabel (SU)
    - status : Revisi, diterima
  - Form Update (U)
    - catatan review
    - status : Revisi, diterima
    - upload file jika diperlukan
- Seminar Proposal
  - Disajikan dalam bentuk tabel (SU)
    - status : Revisi, diterima
  - Form Update (U)
    - catatan review
    - status : Revisi, diterima
    - upload file jika diperlukan
  - Input nilai mahasiswa (SU)
    - Dosen penguji memberikan nilai seminar proposal
    - Dosen pembimbing memberikan nilai proposal
- Ujian Pendadaran
  - Disajikan dalam bentuk tabel (SU)
    - status : Revisi, diterima
  - Form Update (U)
    - catatan review
    - status : Revisi, diterima
    - upload file jika diperlukan
  - Input nilai mahasiswa (SU)
    - Dosen penguji memberikan nilai ujian pendadaran
    - Dosen pembimbing memberikan nilai TA
- Logout

### Admin

- Login
- Dashboard
  - Disajikan list pengajuan judul TA, pendaftaran TA, pendaftaran SPTA, pendaftaran UPTA berdasarkan data terbaru sebanyak 5 data untuk masing-masing
- Validasi Pengajuan TA (Tugas Akhir)
  - Disajikan dalam bentuk tabel (R)
- Validasi Pendaftaran TA (Tugas Akhir)
  - Disajikan dalam bentuk tabel
  - Revisi disertai upload file berupa berkas pendaftaran
  - Setujui disertai upload file berupa surat tugas bimbingan TA
- Manajemen BBBSP (Bagian-bagian Bimbingan Setiap Prodi)
  - Disajikan dalam bentuk tabel (SCRUD)
- Validasi SP TA (Seminar Proposal Tugas Akhir)
  - Disajikan dalam bentuk tabel
  - Revisi disertai upload file berupa berkas pendaftaran
  - Setujui beserta ploting penguji
  - Mencetak berita acara
- Validasi UP TA (Ujian Pendadaran Tugas Akhir)
  - Revisi disertai upload file berupa berkas pendaftaran
  - Setujui beserta ploting penguji
  - Mencetak berita acara
- Logout

## Point yang kurang jelas :

1 Login untuk mahasiswa, prodi, dosen, admin apakah dibuat terpisah
2 Isi dokumen ketika mahasiswa melakukan pendaftaran TA setelah Pengajuan TA
3 Isi formulir pendaftaran ketika mahasiswa mendaftar seminar proposal
4 Type file ketika upload
5 Berita seminar poposal dan ujian pendadaran yang dibuat admin dalam bentuk apa, apakah artikel yang bisa dilihat oleh semua mahasiswa, atau hanya untuk mahasiswa yang dituju
