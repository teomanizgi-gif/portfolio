// NAV SCROLL EFFECT
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// HERO SLIDER
const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// FADE-IN ANIMATION
// FADE-IN ANIMATION
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

faders.forEach(el => observer.observe(el));

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

// toggle
if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    // menu aç/kapa
    nav.classList.toggle("open");

    // 🔥 hamburger animasyonu
    hamburger.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove("open");

      // 🔥 hamburger geri dönsün
      hamburger.classList.remove("active");
    }
  });
}
