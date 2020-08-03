// sticky navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 30);
});

// footer copyright year
const yearEl = document.querySelector(".year");
const date = new Date();
const year = date.getFullYear();
yearEl.innerHTML = year;
