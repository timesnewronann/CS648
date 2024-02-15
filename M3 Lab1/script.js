// Practice with arrays
// 1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
const favoriteMovies = ["Shrek", "City of God", "Star Wars: Episode VI", "Spiderman: Into the Spiderverse", "Good Will Hunting"];

console.log(favoriteMovies[1]);

// 2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor.
// Then assign one of your favorite movies to each index in the array until you have 5 total movies. Then, use the console to display the
// first movie in your array.
const movies = new Array(5);

// Assign favorite movies to each index in the array
movies[0] = "Shrek";
movies[1] = "City of God";
movies[2] = "Star Wars episode VI";
movies[3] = "Into the Spiderverse";
movies[4] = "Good Will Hunting";

// Display the first movie in the array
console.log(movies[0]); // This will display "Shrek"

// 3. Copy your code from step 2. Add a new movie into the 3rd positin from your aray.
// Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

// Add a new movie into the 3rd position (index 2) of the array
movies.splice(2, 0, "The Matrix"); // This shifts "Star Wars episode VI" and subsequent movies one position to the right

// Display the length of the array
console.log(movies.length); // This will display 6

// 4. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the 
// array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array.
// Use the console to display the contents of the array.
const movies = ["Shrek", "City of God", "Star Wars episode VI", "Into the Spiderverse", "Good Will Hunting"];
delete movies[0];
console.log(movies);

// 5. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the 
// array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
const movies = ["Shrek", "City of God", "Star Wars episode VI", "Into the Spiderverse", "Good Will Hunting", "The Matrix", "Inception"];
for (const index in movies) {
    console.log(movies[index]);
}


// 6. Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
for (const movie of movies) {
    console.log(movie);
}

// 7.  Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
movies.sort();
for (const movie of movies) {
    console.log(movie);
}

// 8. Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
const leastFavMovies = ["Taylor Swift Biopic", "The Circle", "Everything, Everything"];

console.log("Movies I like:\n");
for (const movie of movies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (const movie of leastFavMovies) {
    console.log(movie);
}

// Movies I like:

// Movie 1
// Movie 2
// Movie 3
// …

// Movies I regret watching:

// Movie 1
// Movie 2
// Movie 3
// …

// 9. Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
const allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse();
console.log(allMovies);


// 10. Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
console.log(allMovies[allMovies.length - 1]);

// 11. Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
console.log(allMovies[0]);

// 12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
const dislikedMovieIndices = allMovies.map((movie, index) => leastFavMovies.includes(movie) ? index : null).filter(index => index !== null);

// Replace disliked movies with liked movies
dislikedMovieIndices.forEach((index, i) => {
    allMovies[index] = `New Liked Movie ${i + 1}`;
});
console.log(allMovies);

// 13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:
const moviesWithRankings = [["Shrek", 1], ["City of God", 2], ["Star Wars episode VI", 3], ["Into the Spiderverse", 4], ["Good Will Hunting", 5]];
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

// 14. Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

// Employees:

// ZAK
// JESSICA
// MARK
// FRED
// SALLY

const movieNames = moviesWithRankings.filter(item => typeof item[0] === 'string').map(item => item[0]);
console.log(movieNames);

// 15. Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
// Expected Result: [58, "abcd", true]
const employees = ["Zak", "Jessica", "Mark", "Fred", "Ronan"];
const showEmployee = function(employees) {
    console.log("Employees:\n");
    employees.forEach(employee => {
        console.log(employee.toUpperCase());
    });
};
showEmployee(employees);


// 16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
function filterValues(arr) {
    return arr.filter(value => value);
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// 17. Write a JavaScript function to get the largest number from a numeric array.
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getLargestNumber(arr) {
    return Math.max(...arr);
}

// Example usage:
const numericArray = [10, 20, 30, 40, 50];
console.log(getRandomItem(numericArray)); // Random item
console.log(getLargestNumber(numericArray)); // Largest number
