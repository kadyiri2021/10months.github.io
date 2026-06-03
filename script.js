function irAPantalla() {
  const body = document.getElementById("body");

  // activa animación
  body.classList.add("salida");

  // espera que termine la animación
  setTimeout(() => {
    window.location.href = "pantalla2.html";
  }, 600); // mismo tiempo que el CSS
}

const container = document.getElementById('heart-container');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Dispersión total por la pantalla usa porcentaje real del contenedor
    heart.style.left = Math.random() * window.innerWidth + "px";
    
    // Tamaños variados
    const size = Math.random() * 15 + 15 + "px";
    heart.style.fontSize = size;
    
    // Velocidades variadas
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
setInterval(createHeart, 500);
