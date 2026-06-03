const colors = ["#fff2", "#fff4", "#fff7", "rgba(255, 255, 255, 0.98)"]
const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    
    for (let i = 0; i < totalStars; i++) {
        const color = colors[Math.floor(Math.random()*colors.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100); 
        layer.push(`${x}vw ${y}vh 0 ${color}`,`${x}vw ${y + 100}vh 0 ${color}`);
    }
    
    const container = document.querySelector(selector);
    
    if (container) {
        container.style.setProperty("--space-layer", layer.join(","));
        container.style.setProperty("--size", size);
        container.style.setProperty("--duration", duration);
    }
};

generateSpaceLayer("1px",".space-1", 200, "25s");
generateSpaceLayer("2px",".space-2", 100, "20s");
generateSpaceLayer("4px",".space-3", 25, "15s");

function playBackgroundMusic() {
  const audio = document.getElementById('bg-music');
  if (!audio) return;

  // --- Opción archivo local por parámetro 'musica' ---
  
  let btn = document.getElementById('music-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'music-btn';
    btn.textContent = 'Music';
    btn.style.position = 'fixed';
    btn.style.bottom = '18px';
    btn.style.right = '18px';
    btn.style.zIndex = 99;
    btn.style.background = 'rgba(123, 101, 117, 0.85)';
    btn.style.border = 'none';
    btn.style.borderRadius = '24px';
    btn.style.padding = '10px 18px';
    btn.style.fontSize = '1.1em';
    btn.style.cursor = 'pointer';
    document.body.appendChild(btn);
  }
  audio.volume = 0.7;
  audio.loop = true;
  // Intentar reproducir inmediatamente
  audio.play().then(() => {
    btn.textContent = 'Music';
  }).catch(() => {
    // Si falla el autoplay, esperar click en el botón
    btn.textContent = 'Music';
  });
  btn.onclick = () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = 'Music';
    } else {
      audio.pause();
      btn.textContent = 'Music';
    }
  };
}

// Intentar reproducir la música lo antes posible (al cargar la página)
window.addEventListener('DOMContentLoaded', () => {
  playBackgroundMusic();
});
