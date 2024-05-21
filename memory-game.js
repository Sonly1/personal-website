document.addEventListener("DOMContentLoaded", () => {
    const memoryGameContainer = document.getElementById('memory-game-container');
    const cards = [
        'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
        'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
    ];

    let shuffledCards = cards.sort(() => 0.5 - Math.random());
    let selectedCards = [];
    let selectedCardsId = [];
    let matchedCards = [];

    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = index;
        cardElement.addEventListener('click', flipCard);
        memoryGameContainer.appendChild(cardElement);
    });

    function flipCard() {
        const cardId = this.dataset.id;
        selectedCards.push(shuffledCards[cardId]);
        selectedCardsId.push(cardId);
        this.textContent = shuffledCards[cardId];

        if (selectedCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [optionOneId, optionTwoId] = selectedCardsId;

        if (selectedCards[0] === selectedCards[1]) {
            matchedCards.push(selectedCards);
        } else {
            cards[optionOneId].textContent = '';
            cards[optionTwoId].textContent = '';
        }

        selectedCards = [];
        selectedCardsId = [];

        if (matchedCards.length === cards.length / 2) {
            setTimeout(() => alert('You found all matches!'), 500);
        }
    }
});
