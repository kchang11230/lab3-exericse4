function randomInt() {
    return Math.floor(Math.random() * 100) + 1;
}

var correctNumber = randomInt();
var guesses = [];
var turns = 10;

function check(playerGuess) {
    if (guesses.length >= turns) {
        return 'No more turns left!';
    }

    guesses.push(playerGuess);

    if (playerGuess === correctNumber) {
        return { correct: true, message: "Correct!", guesses };
    } else if (playerGuess < correctNumber) {
        return { correct: false, message: "Your guess is too low.", guesses };
    } else {
        return { correct: false, message: "Your guess is too high.", guesses };
    }
}

function resetGame() {
    correctNumber = randomInt();
    guesses = [];
    turns = 10;
}