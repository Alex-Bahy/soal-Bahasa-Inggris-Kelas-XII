# Ujian Online CBT - SMKN 1 Maluku Tengah

Sistem ujian online berbasis web untuk mata pelajaran Pendidikan Agama Katolik Kelas XII.

## 🚀 Cara Deploy ke GitHub Pages

### 1. Persiapan File
Pastikan Anda memiliki file-file berikut:
```
/
├── index.html
├── app.js
├── logo.png (logo sekolah Anda)
└── README.md
```

### 2. Upload ke GitHub

**Langkah 1: Buat Repository Baru**
1. Login ke GitHub.com
2. Klik tombol "+" di pojok kanan atas, pilih "New repository"
3. Beri nama repository, misalnya: `ujian-online-smkn1`
4. Centang "Public"
5. Klik "Create repository"

**Langkah 2: Upload File**
1. Di halaman repository baru, klik "uploading an existing file"
2. Drag & drop atau pilih file: `index.html`, `app.js`, `logo.png`, `README.md`
3. Scroll ke bawah, klik "Commit changes"

**Langkah 3: Aktifkan GitHub Pages**
1. Klik tab "Settings" di repository
2. Scroll ke bawah, cari menu "Pages" di sidebar kiri
3. Di bagian "Source", pilih branch `main` dan folder `/ (root)`
4. Klik "Save"
5. Tunggu beberapa menit, refresh halaman
6. Link website akan muncul: `https://username.github.io/ujian-online-smkn1/`

### 3. Ganti Logo
Untuk menampilkan logo sekolah:
1. Siapkan file logo (format PNG/JPG, ukuran 500x500px atau 1:1)
2. Rename file menjadi `logo.png`
3. Upload ke repository (replace file lama jika ada)

Atau gunakan URL logo online di `index.html`:
```html
<img src="https://link-logo-anda.com/logo.png" alt="Logo" class="school-logo">
```

## ⚙️ Fitur Sistem

✅ **Login dengan Password**
- Username: Nama Siswa
- Password: `1234` (bisa diubah di `app.js`)

✅ **Timer 45 Menit**
- Otomatis selesai saat waktu habis

✅ **Anti-Curang**
- Deteksi pindah tab/aplikasi
- Deteksi split screen / resize window
- Disable klik kanan & DevTools (F12)

✅ **25 Soal Pilihan Ganda**
- Soal diacak setiap siswa
- Navigasi maju/mundur
- Penanda jawaban terpilih

✅ **Hasil Otomatis**
- Nilai langsung ditampilkan
- Status kecurangan tercatat
- Data disimpan di localStorage browser

## 🛠️ Konfigurasi

### Mengubah Password Login
Edit file `app.js` baris 33:
```javascript
if(u && p === "1234") {  // Ganti "1234" dengan password baru
```

### Mengubah Waktu Ujian
Edit file `app.js` baris 31:
```javascript
let timerSec = 2700; // 2700 detik = 45 menit
// Ubah nilai: 1800 = 30 menit, 3600 = 60 menit
```

### Menambah/Edit Soal
Edit file `app.js` bagian `questionsData`:
```javascript
{ 
  q: "Pertanyaan baru?", 
  a: ["Opsi A", "Opsi B", "Opsi C", "Opsi D", "Opsi E"], 
  c: 2  // Index jawaban benar (0=A, 1=B, 2=C, dst)
}
```

## 📊 Melihat Hasil Ujian

Hasil ujian tersimpan di localStorage browser. Untuk melihat:

1. Buka halaman ujian
2. Tekan F12 (Developer Tools)
3. Tab "Console", ketik:
```javascript
JSON.parse(localStorage.getItem('examResults'))
```
4. Lihat semua data ujian siswa

Atau buat halaman admin terpisah untuk menampilkan hasil.

## 🔒 Keamanan

**Catatan Penting:**
- Sistem ini cocok untuk ujian internal/latihan
- Data tersimpan di browser lokal (bisa dihapus siswa)
- Untuk ujian resmi, pertimbangkan backend server (Google Sheets, Firebase)

## 💡 Tips Penggunaan

1. **Test dulu** sebelum ujian sesungguhnya
2. **Instruksikan siswa** untuk tidak refresh/close browser saat ujian
3. **Gunakan fullscreen** (F11) untuk mengurangi gangguan
4. **Backup data** hasil ujian secara berkala

## 📧 Kontak

Jika ada pertanyaan atau butuh bantuan:
- Email: alexbahy@500gb.cloud

---

**© 2024 SMKN 1 Maluku Tengah**