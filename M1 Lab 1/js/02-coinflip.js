//create a coin flip game

// header 
window.document.write("Welcome to the Coin Flip Game!" + "<br>");

// 1. create variable coinFlip and set it equal to a random Number
// Use math method
var coinFlip = Math.random();

// 2. Prompt the user to select "Heads or Tails"
var choice = window.prompt("Heads or Tails?").toLowerCase();

// 3. Use a conditional to check the result of the coin flip
if (coinFlip === 0) { 
    if (choice === "heads") {
        // 4. If the result is heads and user chose heads display the message
// The flip was heads and you chose heads... you win!
        window.document.write("The flip was heads and you chose heads ... you win!");

    } else{
        // 5. If the result is heads and they chose tails. Display
// The flip was headds but you chose heads. You lose
        //The result is heads but they chose tails
        window.document.write("The flip was heads but you chose tails ... you lose!");
    }
} else { // 1 is tails
    if (choice === "tails"){
        // 7. If the result is tails and the user and they chose tails you win
        // If the result is tails and they chose tails 
        window.document.write("The flip was tails and you chose tails ... you win!");
    } else{
// 6. If the result is tails and they chose heads. Display you lose
        window.document.write("The flip was tails but you chose heads ... you lose!");

    }

}

// 8. Use the math method to get a solid whole number. Modify the evaluation of the expression in conditional
// So that it checks a boolean result
coinFlip = Math.round(coinFlip);