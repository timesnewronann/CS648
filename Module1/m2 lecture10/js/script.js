/*eslint-env browser*/

// need 3 functions 

function displayTitle() {
    "use strict";

    window.alert("Welcome to the Guess the Number Game!");
}

function playGame() {
    "use strict";
    var number, count, guess;
    number = Math.floor(Math.random()*10 + 1);
    window.alert("I\'m guessing a number between 1 and 10");
    count = 1;

    while(true) {
        guess = Number(window.prompt("Enter your guess"));
        if (guess < number) {
            window.alert("Too low");
            count += 1;
        }
        else if (guess > number) {
            window.alert("Too high");
            count += 1;
        }
        else if (guess === number){
            window.alert("You guessed it! You guessed the number in " + count + " tries!");
            return;
        }
    }
}

function main() {
    "use strict";
    displayTitle();
    var playAgain = "y";

    //use a while loop to loop through and play the game
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play again? (y/n)");
    }
    window.alert("Thanks for playing");
}

main();