// Contact popup script
const contactBtn = document.getElementById("contact-btn");
const popup = document.getElementById("contact-popup");
const closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
