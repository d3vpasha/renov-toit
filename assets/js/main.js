// Mobile menu
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
const setMenu = (open) => {
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  nav.classList.toggle('is-open', open);
};
burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Reveal on scroll, skipped when the visitor prefers reduced motion
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form: no backend, builds a pre-filled email
document.getElementById('devis').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Nom : ${f.get('name')}\nTéléphone : ${f.get('phone')}\nCommune : ${f.get('town')}\n\n${f.get('message')}`;
  location.href = `mailto:renov.toit07@gmail.com?subject=${encodeURIComponent('Demande de devis')}&body=${encodeURIComponent(body)}`;
});
