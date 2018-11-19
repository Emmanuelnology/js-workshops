var count = 0;
count = 'a';
var a;
var b;
var c;
var d;
var e = ["Kash", "Dave", "Bob"];
var f = ["Jeremy", 5];
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 12] = "Red";
    Colour[Colour["Blue"] = 23] = "Blue";
    Colour[Colour["Green"] = 32] = "Green";
})(Colour || (Colour = {}));
;
// console.log(Colour);
// console.log(Colour.Red);
var anyMessage;
function log(message) {
    console.log(message);
}
log("Hello world");
// tsc hello.ts --watch
// This will auto compile on save
var log2 = function (message) {
    console.log(message);
};
var logBest = function (message) { return message; };
var greet = function (person) {
    return "Hello, My name is " + person.firstName + " " + person.lastName + "\n";
};
var bob = {
    firstName: "Bob",
    lastName: "Smith"
};
var george = {
    firstName: "George",
    lastName: "Webster"
};
console.log(greet(bob));
console.log(greet(george));
var people = [bob, george];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}
console.log();
//for(iterator of object)
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var eachPerson = people_1[_i];
    console.log(eachPerson.firstName);
}
console.log();
//using IN uses the index of the person. For OF doesn't let us ever reference the index.
for (var personIndex in people) {
    console.log(personIndex + ": " + people[personIndex].firstName);
}
