// Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.

var num = Number(prompt(`Enter any number`));

if (num > 0) {
    alert(`${num} is a positive number`);
}

else if (num < 0) {
    alert(`${num} is a negative number`);
}

else if (num === 0) {
    alert(`${num} is zero`);
}

else {
    alert(`Wrong input`);
}