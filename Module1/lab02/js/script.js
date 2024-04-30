// collect users response for miles they've driven
var milesDriven = window.prompt("Enter your miles driven");

//ask user for their gallons
var gallons = window.prompt("Enter the size of your car's tank in gallons");

// create a variable to calculate the total
var mpg = milesDriven / gallons;

//display to the user

document.write("You drove " + milesDriven + " miles.<br>");
document.write("Your tank size " + gallons + " gallons.<br>");
document.write("You got " + parseInt(mpg, 10) + " miles per gallon on this trip");