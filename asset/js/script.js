function showBox() {
    const box = document.getElementById("box");
    box.classList.add("show");
    document.getElementById("toggleBtn").style.display = "none";
}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || "Tamu Undangan";
}

document.getElementById("recipient").textContent = getQueryParameter("nama");