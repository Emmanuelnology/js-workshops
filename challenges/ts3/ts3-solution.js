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
exports.minDateableAge = function (age) { return (age / 2) + 7; };
exports.hasFever = function (tempInCelsius) { return tempInCelsius >= 37.5; };
exports.calcTVHeight = function (width) { return (width / 16) * 9; };
exports.couldDate = function (age1, age2) {
    if (age1 == age2)
        return true;
    var orderedAges = [age1, age2].sort();
    var lowerAge = orderedAges[0];
    var minAge = exports.minDateableAge(orderedAges[1]);
    return lowerAge >= minAge;
};
function floor(number, amount) {
    return (number - amount < 0) ? 0 : number - amount;
}
exports.colorDarken = function (rgb, darkenAmount) {
    var red = floor(rgb.red, darkenAmount);
    var green = floor(rgb.green, darkenAmount);
    var blue = floor(rgb.blue, darkenAmount);
    return [red, green, blue];
};
