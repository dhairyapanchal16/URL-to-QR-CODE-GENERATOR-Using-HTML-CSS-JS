const wrapper = document.querySelector(".qr_container");
const generateBtn = document.getElementById("generateBtn");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr_container img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue) {
    alert("Please enter a URL or text!");
    return;
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    qrValue
  )}`;

  wrapper.classList.add("show");
});

