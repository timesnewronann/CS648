//3 phases
// 1. User makes a choice. How will we collect the user's choice?
// 2. Computer makes a choice. How will we collect the computer's choice?
// 3. A conditional that determines who wins.

// 1. Prompt user for choice

// 2. Create computer's choice. Generated similarly to the coin flip

// 3. Depending on what the numeric value of the computer's choice is, reset it to a string value of rock, paper, or scissors

// 4. Create a conditional statement that checks the user's choice in relation to the computer's choice. Once a winner is defined
// display a message within an alert box indicating who the winner is.

// 5. What if the result ends in a tie? figure out how to handle that as well.

// 6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that.

// 1. Prompt user for choice


// Using my knowledge of lists we can map the rock, paper scissors as choices 
var choices = ["rock", "paper", "scissors"];

//2. Computer makes a choice
function getComputerChoice() {
    var index = Math.floor(Math.random() * 3); // Generate 0,1,2 similar to coin flip
    return choices[index]; // return the choice based off of the index we generate 
}

function rockPaperScissors() {
    // 1. Prompt user for choice
    var userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    // 6. What if the user enters something other than rock, paper, or scissors?
    // If the userChoice is not in choices array 
    if (!choices.includes(userChoice)) {
        window.alert("Invalid Choice! Select rock, paper, or scissors." + "<br>");

        return;
    }

    // 2. Computer's choice
    var computerChoice = getComputerChoice();

    window.alert("Computer throws: " + computerChoice + "<br>");

    //4. Create a conditional to check who won

    if (userChoice === computerChoice) {
        window.alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
         (userChoice === "paper" && computerChoice === "rock") || 
         (userChoice === "scissors" && computerChoice ==="paper") 
    ) {
        window.alert("You won! " + userChoice + " beats " + computerChoice + ".");
    }
    else {
        window.alert("You lose! " + computerChoice + " beats " + userChoice + ".");
    }

}

rockPaperScissors();

