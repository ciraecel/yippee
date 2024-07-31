document.getElementById('interactive-image').addEventListener('click', () => {
    // Play the audio
    document.getElementById('yippee-audio').play();
    
    // Create confetti elements
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * window.innerHeight + 'px';
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}
