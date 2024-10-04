// app.js
document.addEventListener('DOMContentLoaded', () => {
    const reactionButton = document.getElementById('reaction-button');
    const message = document.getElementById('message');
    const result = document.getElementById('result');
    const restartButton = document.getElementById('restart');
    
    let startTime, reactionTime;
    let timeout;

    // Initialize the game
    function init() {
        reactionButton.disabled = true;
        reactionButton.classList.remove('active');
        reactionButton.textContent = 'Wait for green...';
        message.textContent = 'Click the button as soon as it turns green!';
        result.textContent = '';
        restartButton.style.display = 'none';
        reactionTime = 0;

        // Set random delay for button color change (between 2 to 5 seconds)
        const randomDelay = Math.random() * 3000 + 2000; // Random between 2000ms (2s) to 5000ms (5s)
        
        timeout = setTimeout(() => {
            reactionButton.disabled = false;
            reactionButton.classList.add('active');
            reactionButton.textContent = 'Click me!';
            startTime = Date.now(); // Record the time when the button turns green
        }, randomDelay);
    }

    // Button click event listener
    reactionButton.addEventListener('click', () => {
        if (reactionButton.classList.contains('active')) {
            reactionTime = Date.now() - startTime; // Calculate reaction time
            result.textContent = `Your reaction time is ${reactionTime} ms`;
            message.textContent = 'Good job!';
            restartButton.style.display = 'inline-block';
        } else {
            // If they clicked too early
            clearTimeout(timeout);
            message.textContent = 'Too early! Wait for the button to turn green.';
            result.textContent = 'Try again!';
            restartButton.style.display = 'inline-block';
        }
        reactionButton.disabled = true; // Disable the button after one click
    });

    // Restart button click event listener
    restartButton.addEventListener('click', () => {
        init(); // Restart the game
    });

    // Start the game for the first time
    init();
});
