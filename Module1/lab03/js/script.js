// Global Variables
var entry; 
var average;
var score1;
var score2;
var score3;
var total = 0; 

// Get the three student scores and add them up to get the average
entry = window.prompt("Enter test score 1");
score1 = parseInt(entry, 10);
total += score1;

entry = window.prompt("Enter test score 2");
score2 = parseInt(entry,10);
total += score2;

entry = window.prompt("Enter test score 3");
score3 = parseInt(entry,10);
total += score3;

// Calculate the average
average = parseInt(total / 3, 10);

//Display the result 
document.write("The first score was: " + String(score1) + "<br>");
document.write("The second score was: " + String(score2) + "<br>");
document.write("The third score was: " + String(score3) + "<br>");
document.write("The average score was: " + String(average) + "<br>");