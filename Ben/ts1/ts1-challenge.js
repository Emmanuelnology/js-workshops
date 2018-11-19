"use strict";
/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both names is 8 characters

*/
exports.__esModule = true;
var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;
exports.greet = function () { return "Hello, My name is " + firstName + " " + lastName; };
exports.maryAgeDifference = function () {
    var ageDifference = maryAge - myAge;
    return "Mary is " + ageDifference + " years older than me";
};
exports.nameLength = function () {
    var totalLength = firstName.length + lastName.length;
    return "The total length of both names is " + totalLength + " characters";
};
