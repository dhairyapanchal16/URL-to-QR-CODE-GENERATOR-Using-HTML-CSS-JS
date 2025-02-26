document.addEventListener("DOMContentLoaded", () => {
    const qrFormEl = document.getElementById("qrForm");
    const qrImageEl = document.getElementById("qrImage");
    const qrContainerEl = document.getElementById("qrContainer");
    const qrInputTextEl = document.getElementById("qrInputText");
    const generateBtnEl = document.getElementById("generateBtn");

    const renderQRCode = (url) => {
        if (!url) return;
        
        generateBtnEl.innerText = "Generating QR Code...";
        
        // Clear previous QR code to force a reload
        qrImageEl.src = "";
        setTimeout(() => {
            qrImageEl.src = url;
        }, 100);

        qrImageEl.onload = () => {
            qrContainerEl.classList.add("show");
            generateBtnEl.innerText = "Generate QR Code";
        };
    };

    qrFormEl.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(qrFormEl);
        const text = formData.get("qrText").trim();
        
        if (!text) {
            alert("Please enter text to generate QR Code!");
            return;
        }

        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;

        renderQRCode(qrCodeUrl);
    });

    qrInputTextEl.addEventListener("keyup", () => {
        if (!qrInputTextEl.value.trim()) {
            qrContainerEl.classList.remove("show");
        }
    });
});
