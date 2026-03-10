// js/script.js
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav) nav.classList.toggle("active");
}

// Expose ke window agar bisa dipanggil dari onclick di HTML
window.toggleMenu = toggleMenu;

document.addEventListener("DOMContentLoaded", function () {
    // =======================
    // RSS News Feed
    // =======================
    const RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=" + 
        encodeURIComponent(
            "https://news.google.com/rss/search?q=PSG+(site:detik.com+OR+site:kompas.com+OR+site:antaranews.com+OR+site:kumparan.com)&hl=id&gl=ID&ceid=ID:id"
        );

    const fallbackImage = "https://i.imgur.com/uQhStSU.jpeg";

    function getExcerpt(text, wordLimit = 20) {
        if (!text) return "";
        const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
        const words = cleanText.split(/\s+/);
        return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
    }

    // Simple HTML escape untuk mencegah XSS
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    async function loadNews() {
        const container = document.getElementById("news-feed");
        if (!container) return;

        try {
            const response = await fetch(RSS_URL);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            if (!data.items || data.items.length === 0) {
                container.innerHTML = "<p>Tidak ada berita ditemukan saat ini.</p>";
                return;
            }

            let html = "";
            data.items.slice(0, 15).forEach(article => {
                const image = article.thumbnail || fallbackImage;
                const date = new Date(article.pubDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                });
                const title = escapeHtml(article.title || "Tanpa Judul");
                const excerpt = getExcerpt(article.description || "");

                html += `
                <div class="news-card">
                    <img loading="lazy" 
                         src="${image}" 
                         onerror="this.src='${fallbackImage}'" 
                         alt="${title}">
                    <div class="news-content">
                        <div class="news-date">${date}</div>
                        <h3>${title}</h3>
                        <div class="news-excerpt">${excerpt}</div>
                        <a class="read-more" 
                           href="${article.link || '#'}" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            Baca Selengkapnya
                        </a>
                    </div>
                </div>`;
            });

            container.innerHTML = html;
        } catch (error) {
            console.error("Gagal memuat berita:", error);
            container.innerHTML = "<p>Berita gagal dimuat. Coba refresh halaman.</p>";
        }
    }

    // Load pertama kali
    loadNews();

    // Refresh setiap 30 menit (1800000 ms) – bisa dihapus jika tidak perlu
    setInterval(loadNews, 1800000);

   
});