var color = prompt("What is the color of road traffic signal?");

if (color === `Red`) {
    alert("Must Stop");
}
    else if (color === `Yellow`){
        alert("Ready to move");
    }
    else if (color === `Green`){
        alert("Move now");
    }
    else {
        alert("Please mention correct color i.e Red, Yellow or Green");
    }
