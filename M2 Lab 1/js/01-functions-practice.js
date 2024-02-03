//STEP 1
//Write a function called halfNumber that accepts ones argument (a number), divide it by 2, and rewrite the result.
// It should log like Half of 5 is 2.5
function halfNumber(number) {
    // Calculate half of the given number
    var half = number / 2;

    // Log the result
    console.log("Half of " + number + " is " + half + ".");
}


//STEP 2
//Write a function called percentOf that accepts two numbers, figure out what percent the number
// represents of the second number, and return the result. It should log a string like "The result of sqauring the number 3 is 9"
function squareNumber(number) {
    var square = number * number

    console.log("The result of squaring the number " + number + " is " + square + ".");

}

//STEP 3
function percentOf(number1, number2) {
    var percent = (number1 / number2) * 100;

    console.log(number1 + " is " + percent + "% of " + number2 + ".");

}

//STEP 4
function findModulus(number1, number2) {
    var modulus = number2 % number1;

    console.log(modulus + " is the modulus of " + num2 + " and " + num1  + ".");

}
