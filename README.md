# Berita PSG News Website

Portal berita independen yang membahas **Paris Saint-Germain (PSG)**.
Website ini dibuat sebagai **static site** menggunakan HTML, TailwindCSS, dan JavaScript sederhana sehingga:

* cepat
* ringan
* SEO friendly
* mudah di-deploy di hosting static

Desain website terinspirasi dari layout modern seperti **Twitter/X** dan media online seperti **Detik**, **Goal**, dan **Bleacher Report**.

---

# Tujuan Project

Project ini dibuat untuk:

* Membuat website berita modern tanpa CMS berat
* Menggunakan struktur **static site yang mudah dikelola**
* Memaksimalkan **kecepatan website dan Core Web Vitals**
* Menyediakan template website berita yang bisa dikembangkan lebih lanjut

---

# Teknologi yang Digunakan

* **HTML5**
* **TailwindCSS**
* **Vanilla JavaScript**
* Static Hosting (Cloudflare Pages / Netlify / Vercel)

---

# Struktur Folder Project

Project ini memiliki dua versi styling dan JavaScript:

1. **Versi lama**
2. **Versi baru**

Struktur folder:

```text
project-root
│
├── css
│   ├── style.css   → CSS versi lama
│   ├── home.css    → CSS homepage versi baru
│   └── news.css    → CSS halaman artikel versi baru
│
├── js
│   ├── script.js   → JavaScript versi lama
│   └── main.js     → JavaScript versi baru
│
├── img
│
├── index.html
├── artikel.html
└── README.md
```

Penjelasan:

### css/style.css

Digunakan untuk halaman lama website.

### css/home.css

Digunakan untuk halaman homepage versi baru.

### css/news.css

Digunakan untuk halaman artikel berita versi baru.

### js/script.js

Script JavaScript lama.

### js/main.js

Script JavaScript baru yang digunakan untuk:

* toggle mobile menu
* animasi hamburger icon
* interaksi UI

---

# Layout Website

Layout website menggunakan konsep **3 kolom seperti Twitter/X**.

```
HEADER

| SIDEBAR KIRI | KONTEN UTAMA | SIDEBAR KANAN |

FOOTER

MOBILE BOTTOM NAV
```

---

# Struktur Halaman Homepage

Homepage menampilkan daftar berita terbaru.

Struktur halaman:

```
Header
Hero Section
Daftar Berita
Sidebar Kanan
Footer
```

Homepage menggunakan file CSS:

```
css/home.css
```

---

# Struktur Halaman Artikel

Halaman artikel menggunakan struktur yang SEO friendly.

Struktur konten:

```
Breadcrumb
Judul Artikel (H1)
Meta Artikel
Featured Image

Isi Artikel
Subjudul (H2)

Baca Juga
FAQ
Related Articles
```

Halaman artikel menggunakan CSS:

```
css/news.css
```

---

# Sidebar Kiri

Sidebar kiri berisi navigasi utama:

* Beranda
* Berita
* Jadwal
* Klasemen

Sidebar bersifat **sticky** agar tetap terlihat saat pengguna scroll halaman.

---

# Sidebar Kanan

Sidebar kanan menampilkan:

* berita terbaru
* internal link artikel lain

Tujuan sidebar ini:

* meningkatkan internal linking
* meningkatkan waktu membaca pengguna

---

# Footer

Footer website memiliki **3 kolom utama**:

### Kolom 1

Informasi tentang website Berita PSG.

### Kolom 2

Tautan penting:

* Tentang Kami
* Pedoman Media Siber
* Kebijakan Privasi
* Kontak

### Kolom 3

Media sosial website.

---

# Mobile Navigation

Pada tampilan mobile tersedia **Bottom Navigation Bar** seperti aplikasi mobile.

Menu yang tersedia:

* Beranda
* Jadwal
* Berita

Navigation ini bersifat:

```
position: fixed
bottom: 0
```

---

# JavaScript

JavaScript utama berada di:

```
js/main.js
```

Contoh fungsi utama:

## Toggle Mobile Menu

```
function toggleMobileMenu(){

const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("hamburger-icon");

menu.classList.toggle("translate-x-0");

}
```

Fungsi ini digunakan untuk membuka dan menutup menu mobile.

---

# Responsive Design

Website dibuat **mobile-first**.

Breakpoints utama:

```
sm   ≥ 640px
md   ≥ 768px
lg   ≥ 1024px
xl   ≥ 1280px
```

Perilaku layout:

### Desktop

```
Sidebar kiri
Konten
Sidebar kanan
```

### Tablet

```
Sidebar kiri
Konten
```

### Mobile

```
Konten saja
Bottom navigation aktif
```

---

# SEO Optimization

Struktur website dirancang untuk SEO.

Optimasi yang digunakan:

### Heading structure

```
H1 → Judul artikel
H2 → Subjudul
H3 → Subbagian
```

### Internal linking

Digunakan pada:

```
Baca juga
Related articles
Sidebar berita
```

### Image SEO

Semua gambar menggunakan atribut:

```
alt=""
```

### Breadcrumb

Breadcrumb membantu:

* navigasi pengguna
* SEO
* struktur halaman

---

# Performance

Website dirancang agar memiliki performa tinggi.

Optimasi yang digunakan:

* static HTML
* minim JavaScript
* Tailwind utility classes
* optimasi gambar
* layout ringan

Target performa:

* Core Web Vitals baik
* loading cepat
* pengalaman pengguna optimal

---

# Deployment

Website ini cocok untuk hosting static seperti:

* Cloudflare Pages
* Netlify
* Vercel
* GitHub Pages

Contoh deployment menggunakan Cloudflare Pages:

1. Upload repository ke GitHub
2. Hubungkan repository ke Cloudflare Pages
3. Deploy otomatis

---

# Roadmap Pengembangan

Fitur yang direncanakan untuk versi berikutnya:

* author box
* social share button
* table of contents
* reading progress bar
* schema markup (Article + FAQ)
* newsletter

---

# Lisensi

Project ini dibuat untuk tujuan pembelajaran dan pengembangan website berita statis.
