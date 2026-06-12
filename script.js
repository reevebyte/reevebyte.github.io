const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const heroImage = document.querySelector(".hero-image");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const updateHero = () => {
  if (!heroImage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const offset = Math.min(window.scrollY * 0.08, 28);
  heroImage.style.transform = `scale(1.03) translateY(${offset}px)`;
};

updateHeader();
updateHero();

window.addEventListener("scroll", () => {
  updateHeader();
  updateHero();
}, { passive: true });
