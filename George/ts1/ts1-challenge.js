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
function greet() {
    return ("Hello, My name is " + firstName + " " + lastName);
}
exports.greet = greet;
function maryAgeDifference() {
    return ("Mary is " + (maryAge - myAge) + " years older than me");
}
exports.maryAgeDifference = maryAgeDifference;
function nameLength() {
    return ("The total length of both names is " + (firstName.length + lastName.length) + " characters");
}
exports.nameLength = nameLength;
