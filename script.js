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

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

// Funcionalidad para menú responsive y sobre
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');
  const links = document.querySelectorAll('.menu-list a');

  toggleButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('active');
    });
  });

  // Evento para abrir el sobre
  const abrirSobreBtn = document.getElementById('abrir-sobre');
  const sobre = document.getElementById('sobre');
  const sobreContainer = document.getElementById('sobre-container');
  const mainContent = document.getElementById('main-content');

  abrirSobreBtn.addEventListener('click', () => {
    sobre.classList.add('open');

    setTimeout(() => {
      sobreContainer.style.display = 'none';
      mainContent.style.display = 'block';
      AOS.refreshHard(); // refresca animaciones AOS después de mostrar contenido
    }, 1000);
  });
});