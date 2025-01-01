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

// Funcionalidade do menu pop-up
const menuButton = document.querySelector('.menu-button');
const menuPopup = document.querySelector('.menu-popup');
const closeButton = document.querySelector('.close-btn');

// Mostrar o menu pop-up
menuButton.addEventListener('click', () => {
    menuPopup.style.display = 'flex';
});

// Fechar o menu pop-up
closeButton.addEventListener('click', () => {
    menuPopup.style.display = 'none';
});