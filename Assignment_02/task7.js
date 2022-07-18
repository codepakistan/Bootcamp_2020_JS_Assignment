// Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = Number(prompt(`Enter the first number:`));
var num2 = Number(prompt(`Enter the second number:`));
var op = prompt(`Select operation (Add = +, Sub = -, Mul = *, Divide = /, Remainder = %)`);

if (op == '+') {

    sum = eval(`${num1} ${op} ${num2}`);
    alert(`${num1} + ${num2} = ${sum}`);

}

else if (op == '-') {

    sum = eval(`${num1} ${op} ${num2}`);
    alert(`${num1} - ${num2} = ${sum}`);

}

else if (op == '*') {

    sum = eval(`${num1} ${op} ${num2}`);
    alert(`${num1} * ${num2} = ${sum}`);
}

else if (op == '/') {

    sum = eval(`${num1} ${op} ${num2}`);
    alert(`${num1} / ${num2} = ${sum}`);
}

else if (op == '%') {

    sum = eval(`${num1} ${op} ${num2}`);
    alert(`${num1} % ${num2} = ${sum}`);
}

else {

    alert(`Wrong input`);
}