function log(message) {
    console.log(message);
}
var log2 = function (message) {
    console.log(message);
};
var log3 = function (message) { return console.log(message); };
var bob = {
    firstName: "Bob",
    lastName: "Smith"
};
var derek = {
    firstName: "Derek",
    lastName: "Cathead"
};
var greet = function (person) {
    return "Hello, My name is " + person.firstName + " " + person.lastName;
};
console.log(greet(bob));
var people = [bob, derek];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}
console.log("\n");
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log(person.firstName);
}
console.log("\n");
for (var personIndex in people) {
    console.log(personIndex + ": " + people[personIndex].firstName);
}
