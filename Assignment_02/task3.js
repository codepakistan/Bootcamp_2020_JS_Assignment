var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
// This output is true

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// This output is false

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//The output is true for c === 13 and c === 14


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// This output is true



if (true){
alert("True");
}
if (false){
alert("False");
}

// The output TRUE is displayed

if("car" < "cat"){
alert("car is smaller than cat");
}

// This output is true