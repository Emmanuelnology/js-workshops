"use strict";
/*

Arrays, Functions and Conditions

Create a list of colors that contains 4 different colors: violet, green, blue, yellow

Create a function that will take two arguments: an array of colors and an index.
The function will test whether the item at index is not a primary color and if it isn't, replace it with red. The function returns the new array.

Run the function to fix the second item in your color array and output the result to the console.

*/
exports.__esModule = true;
var isPrimary = function (color) {
    return (color == "red") || (color == "yellow") || (color == "blue");
};
function fixColors(colorArray, index) {
    var clonedArray = colorArray.slice(0);
    if (!isPrimary(clonedArray[index])) {
        clonedArray[index] = 'red';
    }
    return clonedArray;
}
exports.fixColors = fixColors;
