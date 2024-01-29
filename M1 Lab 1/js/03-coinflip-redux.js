// Coin Flip Game Redux 
//header
window.document.write("Welcome to the Coin Flip Game Redux" + "<br>");
// 1. Declare coinFlip do not assign variable yet
var coinFlip;

//2. create a for loop that loops 10 times
for (i = 0; i < 10; i++){
    //3. within the for loop assign a randomly generated number 
    coinFlip = Math.round(Math.random());
}

// 4. Use a conditional to check the results of the coin flip. If it's 0 -> heads
// If it's 1 -> tails
window.document.write("The coin is: " + "<br>");
if (coinFlip === "0")
{
    window.document.write("Heads" + "<br>");
}else
{
    window.document.write("Tails" + "<br>");
}