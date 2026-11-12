const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#mobile-menu');
const mobileViewport = window.matchMedia('(max-width: 760px)');
function setMenuOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Закрыть' : 'Меню';
  menu.hidden = !open;
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!expanded);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setMenuOpen(false);
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) { setMenuOpen(false); menuButton.focus(); }
});
mobileViewport.addEventListener('change', event => {
  if (!event.matches) setMenuOpen(false);
});
const config = window.HACKATHON_CONFIG || {};
function yandexUrl(value) {
  try { const u = new URL(value); return u.protocol === 'https:' && u.hostname === 'forms.yandex.ru' ? u : null; }
  catch { return null; }
}
const url = yandexUrl(config.registrationFormUrl);
if (url) {
  document.querySelectorAll('[data-registration-link]').forEach(link => {
    link.href = url.href;
  });
}
