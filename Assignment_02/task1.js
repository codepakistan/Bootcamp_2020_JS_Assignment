// Write a program to take “city” name as input from user. If user enters
// “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("What is the name of your your city?");

if (city === `Karachi`) {
    alert("Welcome to the city of lights");
    
} 

else if (city === `Lahore`) {
    
    alert("Welcome to the city of flowers");
    
} 
else if (city === `Peshawar`){

    alert("Welcome to the city of hospitality");

}

else if (city === `Islamabad`){

    alert("Welcome to the capital of Pakistan");
}

else {

    alert("Welcome to the city.");
    
}