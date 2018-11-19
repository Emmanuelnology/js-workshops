/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

var test = require("./js3-tests");

function minDateableAge(age) {
    return age / 2 + 7;
}

function hasFever(temperature) {
    return temperature >= 37.5;
}

function calcTVHeight(width) {
    return width / 16 * 9;
}

function couldDate(age1, age2) {
    if (age1 > age2) {
        return age2 >= minDateableAge(age1);
    } else if (age2 > age1) {
        return age1 >= minDateableAge(age2);
    } else {
        return true; }
    }
    
    function colorDarken(rgbArray, darkenAmount) {
        var red = rgbArray[0] - darkenAmount;
        var green = rgbArray[1] - darkenAmount;
        var blue = rgbArray[2] - darkenAmount;
        
        if (red < 0) red = 0;
        if (green < 0) green = 0;
        if (blue < 0) blue = 0;
        
        return [red, green, blue];
    }
    
    console.log("\n\nRunning tests...");
    test.minDateableAge(minDateableAge);
    test.hasFever(hasFever);
    test.calcTVHeight(calcTVHeight);
    test.couldDate(couldDate);
    test.colorDarken(colorDarken);
    test.summary();
    