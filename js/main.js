// Menangani fungsi sederhana yang tidak dicover Alpine.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Halaman Berita PSG Siap.');

    // Contoh: Tambahkan efek shadow pada sticky top bar saat scroll
    const topBar = document.querySelector('.top-bar-sticky');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            topBar.style.borderBottomColor = 'var(--psg-red)';
        } else {
            topBar.style.borderBottomColor = 'var(--psg-border)';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle Logic (Opsi: Menutup item lain saat satu dibuka)
    const details = document.querySelectorAll(".faq-item");

    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

    console.log("Media Interface: Boxed Read Also & Toggle FAQ Ready.");
});