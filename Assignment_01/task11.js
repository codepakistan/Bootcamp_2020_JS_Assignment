var temp = (prompt("Enter temperature in Celsius: "));

var farenheit = (temp* 9/5)+32;

document.write(`${temp}<sup>o</sup>C is ${farenheit}<sup>o</sup>F`);

var temp = (prompt("Enter temperature in Farenheit: "));


var celsius = (temp-32)*5/9;

document.write(`<br>${temp}<sup>o</sup>F is ${celsius}<sup>o</sup>C`);