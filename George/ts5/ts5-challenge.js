"use strict";
/*

JS5: Conditions, data manipulation and working with tests

Create functions that:
Returns an object that has an array of active users
Take a person object and will return the names of all people who have matching eye colors
Takes an ID and returns an email address
Finds all active users with an invalid email address. Returns an array of objects.
Programatically add a random mobile phone number to each record (formatted '07XXX XXXXXX'). Returns the whole people array after modification

Run your tests by running this file. They will all break at first.

*/
exports.__esModule = true;
function getActiveUsers(people) {
    var returnArray = [];
    for (var index = 0; index < people.length; index++) {
        if (people[index].isActive)
            returnArray.push(people[index]);
    }
    return returnArray;
}
exports.getActiveUsers = getActiveUsers;
function findMatchingEyeColours(people2, person) {
    var testEyeColour = person.eyeColor;
    var returnArray = [];
    for (var index = 0; index < people2.length; index++) {
        if (people2[index].eyeColor == testEyeColour && people2[index] != person)
            returnArray.push(people2[index].name);
    }
    return returnArray;
}
exports.findMatchingEyeColours = findMatchingEyeColours;
function getEmailAddress(people, id) {
    for (var index = 0; index < people.length; index++) {
        if (people[index].id == id)
            return people[index].email;
    }
    return undefined;
}
exports.getEmailAddress = getEmailAddress;
function getActiveUsersWithInvalidEmail(people) {
    var returnArray = [];
    for (var index = 0; index < people.length; index++) {
        if (people[index].email == undefined || people[index].email.indexOf('@') == -1) {
            if (people[index].isActive == true)
                returnArray.push(people[index]);
        }
    }
    return returnArray;
}
exports.getActiveUsersWithInvalidEmail = getActiveUsersWithInvalidEmail;
function addRandomMobileNumbers(people) {
    for (var index = 0; index < people.length; index++) {
        addNumber(people[index]);
    }
    return people;
}
exports.addRandomMobileNumbers = addRandomMobileNumbers;
function addNumber(person) {
    var rand = "07";
    for (var i = 0; i < 10; i++) {
        rand = rand + Math.floor((Math.random() * 10));
    }
    var split = rand.split("");
    split.splice(5, 1, " ");
    var randomMobileNumber = split.join("");
    person.mobile = randomMobileNumber;
}
