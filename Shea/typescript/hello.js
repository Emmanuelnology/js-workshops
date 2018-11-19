"use strict";
exports.__esModule = true;
var bob = {
    firstName: "Bob",
    lastName: "Smith"
};
var derek = {
    firstName: "Derek",
    lastName: "Cathead"
};
exports.greet = function (person1, person2) {
    return "Hello, My name is " + person1.firstName + " " + person2.lastName;
};
console.log(exports.greet(bob, derek));
var people = [bob, derek];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}
for (var personIndex in people) {
    console.log(people[personIndex].firstName);
}
