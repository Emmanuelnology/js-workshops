"use strict";
exports.__esModule = true;
var bob = {
    firstName: "Bobbinho",
    lastName: "Smith"
};
var derek = {
    firstName: "Derek D Dawg",
    lastName: "Catinho"
};
exports.greet = function (person1, person2) {
    person1.likesCheese;
    return "Hello, My name is " + person1.firstName + " " + person2.lastName;
};
// console.log(greet(bob, derek));
var people = [bob, derek];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}
console.log('\n');
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log(person.lastName);
}
console.log('\n');
for (var personIndex in people) {
    console.log(people[personIndex].firstName);
}
