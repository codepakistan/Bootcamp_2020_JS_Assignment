var a = 10;
document.write(`Result:<br> The value of a is: ${a}`);
document.write(`<br>................................................................`);

var sum = a;
sum = ++a;
document.write(`<br><br>The value of ++a is: ${sum} <br>Now the value of a is: ${sum}`);

sum = a++;
document.write(`<br><br>The value of a++ is: ${sum} <br>Now the value of a is: ${sum+1}` );

sum = --a;
document.write(`<br><br>The value of --a is: ${sum} <br>Now the value of a is: ${sum}`);

sum = a--;
document.write(`<br><br>The value of a-- is: ${sum} <br>Now the value of a is: ${sum-1}`);
