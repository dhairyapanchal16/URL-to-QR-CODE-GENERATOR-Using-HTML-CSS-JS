let qrImage = document.getElementById("qrImage"); 
let downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
    let qrText = document.getElementById("qrText").value;
    if (qrText.trim().length === 0) {
        alert("Please enter a URL or text!");
        return;
    }

    // Generate QR Code from API
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrText;

    // Show download button
    downloadBtn.style.display = "block";
}

// Download QR Code
downloadBtn.addEventListener("click", () => {
    let link = document.createElement("a");
    link.href = qrImage.src;   // QR image source
    link.download = "qrcode.png"; // File name
    link.click();
});
