// Write a program that takes a character (i.e. string of length 1) and
// returns true if it is a vowel, false otherwise

var word = prompt(`Enter any alphabetic character`);

if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u") {

    alert(`True! ${word} is a vowel`);
}
else {

    alert(`False! ${word} is not a vowel`);
}


