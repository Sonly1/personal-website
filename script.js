document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById('game-container');
    const resultDisplay = document.createElement('p');
    const inputField = document.createElement('input');
    const guessButton = document.createElement('button');
    guessButton.textContent = 'Guess';

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    guessButton.addEventListener('click', () => {
        const userGuess = Number(inputField.value);
        if (userGuess === randomNumber) {
            resultDisplay.textContent = 'Congratulations! You guessed the number!';
        } else if (userGuess < randomNumber) {
            resultDisplay.textContent = 'Too low! Try again.';
        } else {
            resultDisplay.textContent = 'Too high! Try again.';
        }
    });

    gameContainer.appendChild(inputField);
    gameContainer.appendChild(guessButton);
    gameContainer.appendChild(resultDisplay);
});