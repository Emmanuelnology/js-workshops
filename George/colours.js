function checkPrimaryColour(arrayOfColours, indexPosition){
    if(!(arrayOfColours[indexPosition] == "red" ||arrayOfColours[indexPosition] == "yellow" ||arrayOfColours[indexPosition] == "blue"))
        arrayOfColours[indexPosition] = "red";

    console.log("New array: ");
    for(i = 0; i < colors.length; i++){
        console.log("Position " + i + " is now " + arrayOfColours[i]);
    }
    return arrayOfColours;
}

var colors = ["violet", "green", "yellow", "blue"];

// checkPrimaryColour(colors, 0);
colors = checkPrimaryColour(colors, 1);
// checkPrimaryColour(colors, 2);
// checkPrimaryColour(colors, 3);