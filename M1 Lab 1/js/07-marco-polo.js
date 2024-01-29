// This is similar to fizz buzz
// Marco Polo
//Create an application which iterates numbers from 1 to 100
// For multiple of 3 print "Marco!"
// For multiple of 5 print "Polo!"
// For multiple of 3 and 5 print "Marco Polo"

for (var i = 1; i < 100; i++)
{
    // if multiple 3 
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Marco! Polo!");;
    }
    else if (i % 5 === 0){
        console.log("Polo!");
    } else if(i % 3 === 0){
        console.log("Marco!");
    }
}