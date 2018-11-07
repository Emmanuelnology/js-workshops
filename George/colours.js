function checkPrimaryColour(arrayOCcolors, indexPosition){
    if(arrayOCcolors[indexPosition] == "red" ||arrayOCcolors[indexPosition] == "yellow" ||arrayOCcolors[indexPosition] == "blue")
        console.log("In this array at posotion " + indexPosition + " is a primary colour as it is " + arrayOCcolors[indexPosition] + ".");
    else{
        console.log("In this array at posotion " + indexPosition + " is NOT primary colour as it is " + arrayOCcolors[indexPosition] + ".");
        arrayOCcolors[indexPosition] = "red";
        console.log("It is now: " + arrayOCcolors[indexPosition]);
    }
    return arrayOCcolors;
}

var colors = ["violet", "green", "yellow", "blue"];
checkPrimaryColour(colors, 0);
checkPrimaryColour(colors, 1);
checkPrimaryColour(colors, 2);
checkPrimaryColour(colors, 3);