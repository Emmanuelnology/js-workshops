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
// WHY ARE THESE METHODS GIVING DIFFERENT RESULTS?
// export const minDateableAge = (usersAge) => { (usersAge/2) + 7;}
function minDateableAge(usersAge) {
    return (usersAge / 2) + 7;
}
exports.minDateableAge = minDateableAge;
function hasFever(tpemerature) {
    if (tpemerature >= 37.5)
        return true;
    return false;
}
exports.hasFever = hasFever;
function calcTVHeight(width) {
    return (width / 16) * 9;
}
exports.calcTVHeight = calcTVHeight;
function couldDate(age1, age2) {
    var minAge = minDateableAge(age1);
    var minAge2 = minDateableAge(age2);
    if (age2 >= minAge && age1 >= minAge2)
        return true;
    return false;
}
exports.couldDate = couldDate;
function colorDarken(array, changeValue) {
    var red = changeColour(array.red, changeValue);
    var blue = changeColour(array.blue, changeValue);
    var green = changeColour(array.green, changeValue);
    return [red, green, blue];
}
exports.colorDarken = colorDarken;
function changeColour(colour, valueOfChange) {
    if (colour >= valueOfChange)
        colour -= valueOfChange;
    else
        colour = 0;
    return colour;
}
