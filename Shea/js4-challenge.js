/*

Arrays, Functions and Conditions

Create a list of colors that contains 4 different colors: violet, green, blue, yellow

Create a function that will take two arguments: an array of colors and an index. 
The function will test whether the item at index is not a primary color and if it isn't, replace it with red. The function returns the new array.

Run the function to fix the second item in your color array and output the result to the console.

*/
var test = require('./testRunner');

function fixColors(colourArray, index){
    if (colourArray[index] != primaryColour[0] &&
        colourArray[index] != primaryColour[1] &&
        colourArray[index] != primaryColour[2]
        ) {
            colourArray[index] = "red";
            return colourArray;    
        }
        return colourArray;  
}
var colors = ['violet', 'green', 'blue', 'yellow'];

// Tests below
test.run(fixColors, ['red', 'green', 'blue', 'yellow'], [colors,0]);
test.run(fixColors, ['violet', 'red', 'blue', 'yellow'], [colors,1]);
test.run(fixColors, ['violet', 'green', 'blue', 'yellow'], [colors,2]);
test.run(fixColors, ['violet', 'green', 'blue', 'yellow'], [colors,3]);
