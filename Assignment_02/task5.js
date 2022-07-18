// Store a secret number (ranging from 1 to 10) in a variable. Prompt
// user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show “Close
// enough to the correct answer”.

var number = Math.floor (Math.random() * 10 + 1);

var guess = Number(prompt(`Guess the number from 1 to 10 `));

if (number === guess) {
    alert("Bingo! Correct answer!");
}
else if(guess === number + 1 || guess === number - 1){

    alert("Close enough to the correct answer!");
}

else {
    document.write(`<b>Wrong!</b><br><br> Correct Answer = ${number}`);

}