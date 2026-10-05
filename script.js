const button = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
function closeMenu() {
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Menü öffnen');
  nav.classList.remove('open');
}
button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    button.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
