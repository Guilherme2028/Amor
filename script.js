// Esse script garante que os corações sejam criados dinamicamente
window.onload = function() {
    const heartsContainer = document.querySelector('.hearts');
    const heartEmojis = ['❤️', '💚', '💙', '💜', '🧡', '💛'];

    // Cria corações dinamicamente
    for (let i = 0; i < 100; i++) {
        let heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        // Aplica um atraso e animação aleatórios
        heart.style.animationDuration = `${Math.random() * 6 + 10}s`;  // Duração aleatória entre 10s e 16s
        heart.style.animationDelay = `${Math.random() * 5}s`;  // Atraso aleatório entre 0s e 5s
        heart.style.left = `${Math.random() * 100}%`;  // Posição aleatória de esquerda para a direita

        heartsContainer.appendChild(heart);
    }
};