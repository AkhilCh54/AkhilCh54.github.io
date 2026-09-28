const navbar = document.querySelector('.navbar');
const revealAfter = 48;

function updateNavbarVisibility() {
  if (!navbar || navbar.hasAttribute('data-always-visible')) return;
  navbar.classList.toggle('navbar-visible', window.scrollY > revealAfter);
}

updateNavbarVisibility();
window.addEventListener('scroll', updateNavbarVisibility, { passive: true });
