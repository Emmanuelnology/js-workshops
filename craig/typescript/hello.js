"use strict";
exports.__esModule = true;
var bob = {
    firstName: "Bob",
    lastName: "Smith"
};
var derek = {
    firstName: "Derek 'D Dawg'",
    lastName: "Cathead"
};
exports.greet = function (person1, person2) {
    return "Hello, My name is " + person1.firstName + " " + person2.lastName;
};
//console.log(greet(bob, derek));
var people = [bob, derek];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}
console.log('\n');
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log(person.firstName);
}
console.log('\n');
for (var personIndex in people) {
    console.log(personIndex + ": " + people[personIndex].firstName);
}
var test = function (object) {
    var obj1 = object;
};
