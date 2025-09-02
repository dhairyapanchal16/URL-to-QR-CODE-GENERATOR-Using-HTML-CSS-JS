const wrapper = document.querySelector(".qr_container");
const generateBtn = document.querySelector("form button");
const qrInput = document.querySelector("form input");
const qrImg = document.querySelector(".qr_container img");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form refresh
  let qrValue = qrInput.value.trim();
  if (!qrValue) {
    alert("Please enter a URL or text!");
    return;
  }

  // Generate QR using API
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    qrValue
  )}`;

  // Show QR container
  wrapper.classList.add("show");
});
