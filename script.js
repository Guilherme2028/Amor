// Gerar a chuva de corações
const heartRain = document.querySelector('.heart-rain');

function generateHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️'; // Coração

    // Posição aleatória
    const startPositionX = Math.random() * window.innerWidth;
    heart.style.left = `${startPositionX}px`;

    // Temporizador para adicionar corações continuamente
    heartRain.appendChild(heart);

    // Remover o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 10000); // Remove o coração após 10 segundos
}

// Gera corações a cada 500ms
setInterval(generateHearts, 500);
