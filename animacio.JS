// Funció per animar cada cercle
function animarCercle(cercle) {
  const percent = cercle.getAttribute('data-percent');
  const path = cercle.querySelector('.nivell');
  const text = cercle.querySelector('.percent');
  
  // Circumferència del cercle (2 * π * radi)
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;

  path.style.strokeDasharray = circumference;
  path.style.strokeDashoffset = circumference;

  // Animació amb interval
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= percent) {
      clearInterval(interval);
    } else {
      progress++;
      const offset = circumference - (circumference * progress) / 100;
      path.style.strokeDashoffset = offset;
      text.textContent = progress + '%';
    }
  }, 15); // ajusta la velocitat
}

// Detectar quan la secció és visible
function checkVisibility() {
  const seccio = document.getElementById('habilitats');
  const rect = seccio.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    document.querySelectorAll('.radial').forEach(animarCercle);
    window.removeEventListener('scroll', checkVisibility); // Només s'executa una vegada
  }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // També al carregar la pàgina
