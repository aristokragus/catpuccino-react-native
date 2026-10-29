# Catpuccino - Aplikasi Pemesanan Kafe Kucing

Aplikasi mobile pemesanan menu digital kafe kucing yang dibangun menggunakan React Native dan Expo. Proyek ini dibuat sebagai implementasi tugas perkuliahan untuk memahami arsitektur komponen React, pengiriman data melalui Props, pengelolaan Local State, serta konsep State Lifting.

## Identitas Mahasiswa
- Nama: I Gst.N.Pt. Diana Putra Pratama
- NIM: 240040118
- Program Studi: S1 Teknologi Informasi (Reguler Renon)
- Mata Kuliah: Aplikasi Berbasis Platform (Pertemuan 4)
- Dosen Pengampu: Made Agus Putra Subali, S.Kom., M.Kom.
- Institusi: ITB STIKOM Bali

## Fitur Aplikasi
1. Daftar Menu: Menampilkan katalog minuman dan makanan kafe kucing lengkap dengan format mata uang Rupiah.
2. Kontrol Kuantitas: Setiap item menu memiliki tombol tambah (+) dan kurang (-) yang dikelola melalui state lokal masing-masing kartu menu.
3. Sinkronisasi Total Pesanan (State Lifting): Akumulasi total seluruh item diangkat (lifted) ke komponen utama (App.js) sebagai Single Source of Truth.
4. Promo Otomatis: Menampilkan banner diskon 10% jika total pesanan mencapai 5 item atau lebih.

## Struktur Komponen
- App.js: Komponen utama pengelola state global totalPesanan, katalog menu, dan handler penambahan pesanan.
- MenuItem.js: Komponen kartu menu yang mengelola state lokal qty dan memicu callback ke parent.
- OrderSummary.js: Komponen presentasional penerima props totalCount dan penampil banner promosi bersyarat.

## Cara Menjalankan Aplikasi
1. Clone repositori:
   git clone https://github.com/aristokragus/catpuccino-react-native.git
   cd catpuccino-react-native

2. Instal dependensi:
   npm install

3. Jalankan server Expo:
   npx expo start -c

4. Buka di perangkat fisik menggunakan aplikasi Expo Go pada Android atau iOS.
