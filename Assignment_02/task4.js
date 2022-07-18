// 
var num1 = Number(prompt("Enter marks obtained in Calculus"));
var num2 = Number(prompt("Enter marks obtained in Deep Learning"));
var num3 = Number(prompt("Enter marks obtained in Blockchain"));
var total = Number(prompt("Enter the total marks"));


var obtained = num1 + num2 + num3;
var percentage = (obtained / total) * 100;

//alert(`Your total marks obtained are: ${obtained}`);
//alert(`Your resulting percentage is: ${percentage}`);


if (percentage >= 80) {
    document.write(`<b> Marks Sheet </b><br><br> Total marks :  ${total} <br> Marks Obtained : ${obtained} <br> Percentage : ${percentage} <br> Grade : A-plus <br> Remarks : Excellent <br>`);
}

else if (percentage >= 70) {

    document.write(`<b> Marks Sheet </b><br><br> Total marks :  ${total} <br> Marks Obtained : ${obtained} <br> Percentage : ${percentage} <br> Grade : A <br> Remarks : Good <br>`);
    
}

else if (percentage >= 60) {

    document.write(`<b> Marks Sheet </b><br><br> Total marks :  ${total} <br> Marks Obtained : ${obtained} <br> Percentage : ${percentage} <br> Grade : B <br> Remarks : You need to improve <br>`);
    
}

else if (percentage < 60) {

    document.write(`<b> Marks Sheet </b><br><br> Total marks :  ${total} <br> Marks Obtained : ${obtained} <br> Percentage : ${percentage} <br> Grade : Fail <br> Remarks : Sorry <br>`);
    
}

