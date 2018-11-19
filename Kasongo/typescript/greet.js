"use strict";
exports.__esModule = true;
var bob = {
    firstName: "Bob",
    lastName: "Smith"
};
var derek = {
    firstName: "Derek",
    lastName: "Woff"
};
exports.greet = function (person1, person2) {
    return "Hello, My name is " + bob.firstName + " " + bob.lastName;
};
console.log(exports.greet(bob, derek));
var people = [bob, derek];
for (var index = 0; index < 5; index++) {
    console.log(people[index].firstName);
}
console.log('\n');
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log(person.firstName);
}
console.log('\n');
for (var personIndex in people) {
    console.log(people[personIndex].firstName);
}
