// Portfolio interactions — Dhanashri Nimbhorkar

// 1. Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('siteNav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
// close the menu after choosing a section
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// 2. Highlight the nav link for the section currently on screen
const links = [...nav.querySelectorAll('a[href^="#"]')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// 3. Back-to-top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 4. Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
