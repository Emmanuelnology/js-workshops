var primaryColour = ["red", "yellow", "blue"];

function primaryFunction(colourArray, index){
    if (colourArray[index] != primaryColour[0] &&
        colourArray[index] != primaryColour[1] &&
        colourArray[index] != primaryColour[2]
        ) {
            colourArray[index] = "red";
            return colourArray;    
        }
        return colourArray;  
}

console.log(primaryFunction(["violet", "green", "blue", "yellow"], 0));
