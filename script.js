var calcEle = document.body.querySelector(".calc");

var userInput1 = prompt("What is your first number?")
var userInput2 = prompt("What is your second number")

userInput1 = Number(userInput1);
userInput2 = Number(userInput2);

calcEle.innerHTML=userInput1+userInput2;