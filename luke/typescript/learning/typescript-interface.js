"use strict";
exports.__esModule = true;
// specific interface for type definition, ocne you make a new person1. 
//it shows the list in the definition
var person1 = {
    firstName: "Bob",
    lastName: "Smith"
};
var person2 = {
    firstName: "Derek",
    lastName: "Cathead"
};
exports.greet = function (person1, person2) {
    return "Hello, My name is " + person1.firstName + " " + person2.lastName;
};
console.log(exports.greet(person1, person2));
