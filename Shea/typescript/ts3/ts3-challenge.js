"use strict";
/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/
exports.__esModule = true;
exports.minDateableAge = function (age) { return age / 2 + 7; };
exports.hasFever = function (temperature) { return temperature >= 37.5; };
exports.calcTVHeight = function (width) { return width / 16 * 9; };
exports.couldDate = function (age1, age2) {
    if (age1 > age2) {
        return age2 >= (age1 / 2 + 7);
    }
    else if (age2 > age1) {
        return age1 >= (age2 / 2 + 7);
    }
    return true;
};
exports.colorDarken = function (colorArray, darkenAmount) {
    var red = colorArray.red - darkenAmount;
    var green = colorArray.green - darkenAmount;
    var blue = colorArray.blue - darkenAmount;
    if (red < 0)
        red = 0;
    if (green < 0)
        green = 0;
    if (blue < 0)
        blue = 0;
    return [red, green, blue];
};
