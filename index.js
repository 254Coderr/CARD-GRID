/* Define an array of card values
const cardValues = ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];

// Array to store flipped cards
let flippedCards = [];

// Shuffle the cards using the Fisher-Yates algorithm
function shuffleCards() {
    for (let i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]];
    }
}

// Function to handle the flip of a card
function flipCard(card) {
    // Return if there are already two flipped cards
    if (flippedCards.length === 2) {
        return;
    }

    // Add the 'flipped' class to visually flip the card
    card.classList.add('flipped');
    flippedCards.push(card);

    // Check if two cards are flipped
    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards.map(card => card.dataset.value);

        // Check if the values of the flipped cards match
        if (card1 === card2) {
            // The cards match! Remove them from the grid
            flippedCards.forEach(card => card.remove());
        } else {
            // The cards don't match. Flip them back after a delay
            setTimeout(() => {
                flippedCards.forEach(card => card.classList.remove('flipped'));
            }, 1000);
        }

        // Reset the flipped cards array
        flippedCards = [];
    }

    // Apply a small rotation to ensure the transition triggers in both Chrome and Firefox
    card.style.transform = 'rotateY(0deg)';
    requestAnimationFrame(() => {
        card.style.transform = 'rotateY(180deg)';
    });
}

// Function to create the initial card grid
function createCardGrid() {
    // Shuffle the cards
    shuffleCards();

    // Get the game board container
    const gameBoard = document.getElementById('game-board');

    // Loop through card values and create card elements
    for (const value of cardValues) {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden');
        card.dataset.value = value;

        // Create a div to display the card value
        const valueElement = document.createElement('div');
        valueElement.classList.add('card-value');
        valueElement.textContent = value;
        card.appendChild(valueElement);

        // Add click event listener to each card
        card.addEventListener('click', () => flipCard(card));

        // Append the card to the game board
        gameBoard.appendChild(card);
    }

    // Reveal the cards after a short delay
    setTimeout(() => {
        gameBoard.querySelectorAll('.card').forEach(card => card.classList.remove('hidden'));
    }, 500);
}

// Get the shuffle button element
const shuffleButton = document.getElementById('shuffle-button');

// Add click event listener to the shuffle button
shuffleButton.addEventListener('click', () => {
    // Clear the game board
    document.getElementById('game-board').innerHTML = '';

    // Create a new card grid
    createCardGrid();
});

// Initialize the card grid when the page loads
document.addEventListener('DOMContentLoaded', createCardGrid); */
// Array containing exercise data with names and descriptio
const exerciseData = [
    { name: 'Jumping Jacks', description: 'Cardio exercise that involves jumping and arm movements.' },
    { name: 'Push-ups', description: 'Strength-building exercise for the chest, shoulders, and arms.' },
    { name: 'Yoga', description: 'Mind-body practice that combines physical postures, breathing, and meditation.' },
    { name: 'Running', description: 'Cardiovascular exercise that involves running or jogging.' },
    { name: 'Plank', description: 'Core-strengthening exercise that involves maintaining a static position.' },
    { name: 'Cycling', description: 'Low-impact cardiovascular exercise using a stationary bike.' },
    { name: 'Squats', description: 'Lower body exercise that targets the muscles in the thighs and buttocks.' },
    { name: 'Swimming', description: 'Full-body exercise that involves swimming in a pool or open water.' },
];
// Array to store flipped cards during the game
let flippedCards = [];
// Function to shuffle the exercise cards
function shuffleCards() {
    for (let i = exerciseData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [exerciseData[i], exerciseData[j]] = [exerciseData[j], exerciseData[i]];
    }
}
// Function to handle card flipping when clicked
function flipCard(card) {
    if (flippedCards.length === 2) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards.map(card => card.dataset.value);

        if (card1 === card2) {
            flippedCards.forEach(card => card.remove());
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    // Reset the transformation to 0 degrees
                    card.style.transform = 'rotateY(0deg)';
                });
            }, 1000);
        }

        flippedCards = [];
    }

    // Display the description on card flip
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('card-description');
    descriptionElement.textContent = exerciseData.find(data => data.name === card.dataset.value).description;

    card.appendChild(descriptionElement);

    card.style.transform = 'rotateY(0deg)';
    requestAnimationFrame(() => {
        card.style.transform = 'rotateY(180deg)';
    });
}

function createCardGrid() {
    shuffleCards();
    const gameBoard = document.getElementById('game-board');

    for (const data of exerciseData) {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden');
        card.dataset.value = data.name;

        const valueElement = document.createElement('div');
        valueElement.classList.add('card-value');
        valueElement.textContent = data.name;
        card.appendChild(valueElement);

        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    }

    setTimeout(() => {
        gameBoard.querySelectorAll('.card').forEach(card => card.classList.remove('hidden'));
    }, 500);
}

const shuffleButton = document.getElementById('shuffle-button');

shuffleButton.addEventListener('click', () => {
    document.getElementById('game-board').innerHTML = '';
    createCardGrid();
});

document.addEventListener('DOMContentLoaded', createCardGrid);

