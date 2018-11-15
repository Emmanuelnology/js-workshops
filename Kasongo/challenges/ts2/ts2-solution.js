"use strict";
exports.__esModule = true;
function isPrimary(color) {
    return (color == "red") || (color == "yellow") || (color == "blue");
}
function fixColors(colorArray, index) {
    var clonedArray = colorArray.slice(0);
    if (!isPrimary(clonedArray[index])) {
        clonedArray[index] = "red";
    }
    return clonedArray;
}
exports.fixColors = fixColors;
