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
exports.minDateableAge = function (yourAge) {
    return (yourAge / 2 + 7); // change this line and add others if needed
};
exports.hasFever = function (temp) {
    return temp >= 37.5;
    // change this line and add others if needed
};
exports.calcTVHeight = function (width) {
    return (width / 16) * 9; // change this line and add others if needed
};
exports.couldDate = function (yourAge, theirAge) {
    var ageSort = [yourAge, theirAge].sort();
    var lowerAge = ageSort[0];
    var minAge = exports.minDateableAge(ageSort[1]);
    if (yourAge === theirAge)
        return true;
    return minAge <= lowerAge;
    // change this line and add others if needed
};
function floor(number, amount) {
    return (number - amount < 0) ? 0 : number - amount;
}
function colorDarken(rgb, darkenAmount) {
    var red = floor(rgb.red, darkenAmount);
    var blue = floor(rgb.blue, darkenAmount);
    var green = floor(rgb.green, darkenAmount);
    return [red, green, blue]; // change this line and add others if needed
}
exports.colorDarken = colorDarken;
