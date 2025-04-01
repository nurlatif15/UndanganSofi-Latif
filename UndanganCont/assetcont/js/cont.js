function updateCountdown() {
    const weddingDate = new Date("2025-07-15T00:00:00").getTime(); // Ubah tanggal pernikahan sesuai kebutuhan
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Reservasi
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nama = document.getElementById("nama").value;
    let kehadiran = document.getElementById("kehadiran").value;
    let pesan = document.getElementById("pesan").value;

    if (nama.trim() === "") {
        alert("Nama harus diisi!");
        return;
    }

    // Menambahkan kelas loading ke tombol kirim
    let submitButton = document.getElementById("submitButton");
    submitButton.classList.add("loading");

    let data = {
        nama: nama,
        kehadiran: kehadiran,
        pesan: pesan
    };

    fetch("https://script.google.com/macros/s/AKfycbx3wzjgtMftrJMwyENdMm8h1Noa6GTxE_8zlK-OicZwR9kUP81P4crp90zfaQlfDWEO/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => {
        document.getElementById("status").style.display = "block";
        document.getElementById("reservationForm").reset();

        // Menghapus kelas loading dan menampilkan pesan sukses
        setTimeout(() => {
            submitButton.classList.remove("loading"); // Hapus animasi loading
            document.getElementById("status").style.display = "none"; // Sembunyikan status setelah beberapa detik

            // Refresh halaman setelah 3 detik
            window.location.reload();
        }, 3000); // Sembunyikan status setelah 3 detik
    }).catch(error => console.error("Error:", error));
});


// kado
function copyAccount() {
    const accountNumber = document.getElementById("account-number").innerText;
    navigator.clipboard.writeText(accountNumber).then(() => {
        alert("Nomor rekening disalin!");
    });
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

        document.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        });
        document.addEventListener("keydown", function(e) {
            if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "U")) {
                e.preventDefault();
            }
        });
