// Countdown
// Write an application that counts down to 0 based on the number that user passes
// If 10 count down from 10 to 0 

window.document.write("Welcome to the Countdown Application!" + "<br>");

var number = window.prompt("Enter a number!");

while (number > -1){
    window.document.write(number + "<br>");
    number--;
}
