// Contador regresivo para la fecha objetivo
const targetDate = new Date('2025-08-16T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Ejecutar inmediatamente y luego cada segundo
updateCountdown();
const timer = setInterval(updateCountdown, 1000);

// Funcionalidad para menú responsive
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');

  toggleButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  const links = document.querySelectorAll('.menu-list a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
      }
    });
  });
});