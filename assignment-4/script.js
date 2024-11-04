// Generate a random number between 1 and 10
let randomNumber = GenerateRandomNumber();

// Grab elements from the DOM
const userGuessInput = document.getElementById('userGuess');
const feedback = document.getElementById('feedback');

// Select guessButton and playAgainButton
const guessButton = document.getElementById('guessButton');
const playAgainButton = document.getElementById('playAgainButton');

// Function to handle guesses
guessButton.onclick = () => {
    // Check if the input is empty
    if (userGuessInput.value === '') {
        feedback.textContent = 'Please enter a number!';
        return;
    }

    // Convert the input to a number
    const userGuess = parseInt(userGuessInput.value);

    // Compare the guess to the random number
    if (userGuess === randomNumber) {
        feedback.textContent = 'Congratulations! You guessed the number!';
        // Show the "Play Again" button and hide the "Guess" button
        guessButton.style.display = 'none';
        playAgainButton.style.display = 'inline';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    }
};

// Function to reset the game
playAgainButton.onclick = () => {
    randomNumber = GenerateRandomNumber(); // Generate a new random number
    feedback.textContent = ''; // Clear feedback message
    userGuessInput.value = ''; // Clear input field
    guessButton.style.display = 'inline'; // Show the "Guess" button
    playAgainButton.style.display = 'none'; // Hide the "Play Again" button
};

// Function to generate a random number between 1 and 10
function GenerateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}