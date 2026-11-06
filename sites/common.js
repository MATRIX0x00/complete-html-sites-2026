const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

const yearNode = document.querySelector('[data-year]');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
