const wrapper = document.querySelector(".qr_container");
const generateBtn = document.querySelector("form button");
const qrInput = document.querySelector("form input");
const qrImg = document.querySelector(".qr_container img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  wrapper.classList.add("show");
});
