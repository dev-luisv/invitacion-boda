document.addEventListener("DOMContentLoaded", function () {
  // === 1) Menú hamburguesa ===
  const toggleBtn = document.querySelector(".menu-toggle");
  const menuList = document.querySelector(".menu-list");

  if (toggleBtn && menuList) {
    toggleBtn.addEventListener('click', () => {
      menuList.classList.toggle('active');
    });
  }

  // === 2) Contador regresivo ===
  const targetDate = new Date('2025-08-16T00:00:00');

  function updateCountdown() {
    const now  = new Date();
    const diff = targetDate - now;

    const daysEl    = document.getElementById('days');
    const hoursEl   = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (diff <= 0) {
      daysEl.textContent    = '0';
      hoursEl.textContent   = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearInterval(timer);
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent    = days;
    hoursEl.textContent   = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);

  // === 3) Ocultar menú al hacer clic en enlaces ===
  const links = document.querySelectorAll('.menu-list a');

  if (menuList && links.length) {
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuList.classList.remove('active');
      });
    });
  }

  // === 4) Lógica del sobre de bienvenida ===
  const abrirSobreBtn  = document.getElementById('abrir-sobre');
  const sobre          = document.getElementById('sobre');
  const sobreContainer = document.getElementById('sobre-container');
  const mainContent    = document.getElementById('main-content');

  if (abrirSobreBtn && sobre && sobreContainer && mainContent) {
    abrirSobreBtn.addEventListener('click', () => {
      sobre.classList.add('open');
      setTimeout(() => {
        sobreContainer.style.display = 'none';
        mainContent.style.display    = 'block';

        if (typeof AOS !== 'undefined' && AOS.refreshHard) {
          AOS.refreshHard();
        }
      }, 1000);
    });
  }
});
