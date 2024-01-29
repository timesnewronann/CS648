// The Coin Flip Streak Game
// The point is to see what kind of streak you can get to 
window.document.write("Welcome to the Coin Flip Streak Game!" + "<br>");

// 1. Begin your application by declaring a variable called coinFlip.
// Do not assign a variable number just yet
var coinFlip;
var streak = 0; // Consecutive heads; we only track heads 
window.document.write("Current Streak: " + streak + "<br>");

// 2. Create a do-while loop
do {
    // 3. Assign a randomly generated number to coinFlip
    // Make sure to round that number off to get a 0 or 1
    coinFlip = Math.round(Math.random());

    // 4. Use a conditional to check the result of the coin flip
    if (coinFlip === 0) {
        console.log("Heads");
        streak++; // Increment the streak
        window.document.write("Current Streak: " + streak + "<br>");
    } else {
        console.log("Tails");
    }
} while (coinFlip === 0); // Continue the loop as long as coinFlip is 0 (Heads)

console.log("Streak ended. Total heads in a row: " + streak);
