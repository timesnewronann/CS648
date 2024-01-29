// Create an application that accepts two integers within two seperate prompts.
// Then display only the larger of the two within the browser window.
// Don't forget to handle the fact that two could be equal.

// create two integers in two seperate prompts
var integer1;
var integer2;
var prompt1;
var prompt2;
var greaterInteger;

//header
window.document.write("Welcome to the larger or smaller application!" + "<br>");

prompt1 = window.prompt("Enter integer 1");
integer1 = parseInt(prompt1,10);

prompt2 = window.prompt("Enter integer 2");
integer2 = parseInt(prompt2, 10);

// display the larger of the two within the browser window.

if (integer1 < integer2) {
    greaterInteger = integer2;
    window.document.write("The larger integer is " + greaterInteger);
} else if (integer1 > integer2) {
    greaterInteger = integer1;
    window.document.write("The larger integer is " + greaterInteger);
} else {
    window.document.write("The integers are the same");
}


