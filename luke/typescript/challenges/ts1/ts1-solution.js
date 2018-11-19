"use strict";
exports.__esModule = true;
var firstName = "Bob";
var lastName = "Smith";
var myAge = 22;
var maryAge = 33;
function greet() {
    return "Hello, My name is " + firstName + " " + lastName;
}
exports.greet = greet;
function maryAgeDifference() {
    var ageDifference = maryAge - myAge;
    return "Mary is " + ageDifference + " years older than me";
}
exports.maryAgeDifference = maryAgeDifference;
function nameLength() {
    var totalLength = firstName.length + lastName.length;
    return "The total length of both names is " + totalLength + " characters";
}
exports.nameLength = nameLength;
