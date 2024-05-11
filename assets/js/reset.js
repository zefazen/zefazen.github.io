// Refresh Halaman
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        // Menahan pengiriman formulir agar halaman tidak ter-refresh secara otomatis
        event.preventDefault();

        // Mengirim formulir secara manual (opsional)
        this.submit();

        // Menunggu sebentar sebelum merefresh halaman
        setTimeout(function() {
            location.reload();
        }, 10500); // Waktu dalam milidetik (di sini 1000ms atau 1 detik)
    });
});