var test = require("./js2-tests");

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

console.log("\n\nRunning tests...");
test.fixColors(fixColors);
test.summary();

