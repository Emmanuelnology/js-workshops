"use strict";
/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/
exports.__esModule = true;
var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;
exports.greet = function () { return "Hello, My name is " + firstName + " " + lastName; };
exports.maryAgeDifference = function () {
    var ageDiff = maryAge - myAge;
    return "Mary is " + ageDiff + " years older than me";
};
exports.nameLength = function () {
    var calcNameLength = firstName.length + lastName.length;
    return "The total length of both names is " + calcNameLength + " characters";
};
