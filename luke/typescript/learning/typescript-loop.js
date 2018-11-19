var bob = {
    firstName: "Bob",
    lastName: "Smith"
};
var derek = {
    firstName: "Derek",
    lastName: "Cathead"
};
var people = [bob, derek];
for (var index = 0; index < people.length; index++) {
    console.log(people[index].firstName);
}
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log(person.firstName);
}
for (var personIndex in people) {
    console.log(personIndex + ":" + people[personIndex].firstName);
}
