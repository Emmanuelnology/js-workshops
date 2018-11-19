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
    return (age1 === age2) ? true : (age1 > age2) ? age2 >= exports.minDateableAge(age1) : age1 >= exports.minDateableAge(age2);
};
var floor = function (initial, subtracter) {
    if (subtracter >= initial)
        return 0;
    return Math.floor(initial - subtracter);
};
exports.colorDarken = function (colorArray, darkener) {
    var newRed = floor(colorArray.red, darkener);
    var newGreen = floor(colorArray.green, darkener);
    var newBlue = floor(colorArray.blue, darkener);
    return [newRed, newGreen, newBlue];
};
