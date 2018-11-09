var myColours = ["violet", "green", "blue", "yellow"]; //red, yellow, blue

function colourFunction(colourArray, index) {
    if 
    (colourArray[index] !="yellow" && "red" && "blue") {
        colourArray[index] = "red";
    }
    return colourArray;
}

function printArray(array) {
    console.log(array);
}

colourFunction(myColours, 1);
printArray(myColours);
