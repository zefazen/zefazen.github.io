// Form Submission Reset
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Clear values of name, email, and message inputs
    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('message')[0].value = '';

    // Optionally, you can submit the form programmatically after clearing
    this.submit(); // Uncomment this line if you want to submit the form programmatically after clearing
});

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
        }, 30000); // Waktu dalam milidetik (di sini 1000ms atau 1 detik)
    });
});