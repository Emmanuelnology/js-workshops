/*

Arrays, Functions and Conditions

Create a list of colors that contains 4 different colors: violet, green, blue, yellow

Create a function that will take two arguments: an array of colors and an index. 
The function will test whether the item at index is not a primary color and if it isn't, replace it with red. THe function returns the new array.

Run the function to fix the second item in your color array and output the result to the console.

*/

function isPrimary(color) {
    return (color=="red") || (color=="yellow") || (color=="blue");
}

function fixColors(array, index) {
    if (!isPrimary(array[index])) {
        array[index]="red";
    }
    return array;
}

var colors = ['violet', 'green', 'blue', 'yellow'];

console.log(fixColors(colors, 1));