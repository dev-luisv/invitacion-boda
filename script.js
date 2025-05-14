const fechaBoda = new Date("2025-12-14T17:00:00").getTime();

const cuentaRegresiva = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  if (diferencia < 0) {
    clearInterval(cuentaRegresiva);
    document.getElementById("timer").innerHTML = "¡Ya llegó el gran día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = horas;
  document.getElementById("minutes").textContent = minutos;
  document.getElementById("seconds").textContent = segundos;
}, 1000);