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
function greet() {
    return "Hello, My name is " + firstName + " " + lastName;
    // ... your code here
}
exports.greet = greet;
function maryAgeDifference() {
    var ageDiff = maryAge - myAge;
    return "Mary is " + ageDiff + " years older than me";
    // ... your code here
}
exports.maryAgeDifference = maryAgeDifference;
function nameLength() {
    var lengthOfNames = firstName.length + lastName.length;
    return "The total length of both names is " + lengthOfNames + " characters";
    // ... your code here
}
exports.nameLength = nameLength;
