"use strict";
exports.__esModule = true;
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
function getActiveUsers(people) {
    var activeUsers = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.isActive)
            activeUsers.push(person);
    }
    return activeUsers;
}
exports.getActiveUsers = getActiveUsers;
function findMatchingEyeColours(people, sourcePerson) {
    var matchingEyeColors = [];
    if (sourcePerson != undefined && ('eyeColor' in sourcePerson)) {
        for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
            var person = people_2[_i];
            if (person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id) {
                matchingEyeColors.push(person.name);
            }
        }
    }
    return matchingEyeColors;
}
exports.findMatchingEyeColours = findMatchingEyeColours;
function getEmailAddress(people, id) {
    for (var _i = 0, people_3 = people; _i < people_3.length; _i++) {
        var person = people_3[_i];
        if (person.id == id)
            return person.email;
    }
}
exports.getEmailAddress = getEmailAddress;
function getActiveUsersWithInvalidEmail(people) {
    var invalidMails = [];
    var activeUsers = getActiveUsers(people);
    for (var _i = 0, activeUsers_1 = activeUsers; _i < activeUsers_1.length; _i++) {
        var person = activeUsers_1[_i];
        if ('email' in person) {
            if (person.email.indexOf('@') == -1)
                invalidMails.push(person);
        }
        else
            invalidMails.push(person);
    }
    return invalidMails;
}
exports.getActiveUsersWithInvalidEmail = getActiveUsersWithInvalidEmail;
function addRandomMobileNumbers(people) {
    for (var _i = 0, people_4 = people; _i < people_4.length; _i++) {
        var person = people_4[_i];
        person.mobile = randomNumberGenerator();
    }
    return people;
}
exports.addRandomMobileNumbers = addRandomMobileNumbers;
function randomNumberGenerator() {
    var prefix = "07";
    var first = integerRandomiser(100, 1000);
    var second = integerRandomiser(100000, 1000000);
    return prefix + first + " " + second;
}
function integerRandomiser(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
