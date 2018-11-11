var test = require('../testRunner');

function isPrimary(color) {
    return (color == "red") || (color == "yellow") || (color == "blue");
}

function fixColors(colorArray, index) {
    var clonedArray = colorArray.slice(0);
    if(!isPrimary(clonedArray[index])) {
      clonedArray[index] = "red";
    }
    return clonedArray;
}

var colors = ['violet', 'green', 'blue', 'yellow'];

// Tests below
test.run(fixColors, ['red', 'green', 'blue', 'yellow'], [colors,0]);
test.run(fixColors, ['violet', 'red', 'blue', 'yellow'], [colors,1]);
test.run(fixColors, ['violet', 'green', 'blue', 'yellow'], [colors,2]);
test.run(fixColors, ['violet', 'green', 'blue', 'yellow'], [colors,3]);
