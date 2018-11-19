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
exports.getActiveUsers = function (people) {
    var activeUsers = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.isActive)
            activeUsers.push(person);
    }
    return activeUsers;
};
exports.findMatchingEyeColours = function (people, eyePerson) {
    var matchingNames = [];
    if (eyePerson != undefined && eyePerson.hasOwnProperty("eyeColor")) {
        for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
            var person = people_2[_i];
            if (person.id != eyePerson.id && person.eyeColor === eyePerson.eyeColor) {
                matchingNames.push(person.name);
            }
        }
    }
    return matchingNames;
};
exports.getEmailAddress = function (people, id) {
    for (var _i = 0, people_3 = people; _i < people_3.length; _i++) {
        var person = people_3[_i];
        if (person.id === id)
            return person.email;
    }
};
exports.getActiveUsersWithInvalidEmail = function (people) {
    var activeWithInvalidEmail = [];
    var activeUsers = exports.getActiveUsers(people);
    for (var _i = 0, activeUsers_1 = activeUsers; _i < activeUsers_1.length; _i++) {
        var person = activeUsers_1[_i];
        if (person.hasOwnProperty("email")) {
            if (person.email.indexOf("@") < 1) {
                activeWithInvalidEmail.push(person);
            }
        }
        else
            activeWithInvalidEmail.push(person);
    }
    return activeWithInvalidEmail;
};
var randomThreeDigitNumber = function (min, max) {
    var unpadded = Math.floor(Math.random() * (max - min)) + min;
    return (unpadded < 10) ? "00" + unpadded : (unpadded < 100) ? "0" + unpadded : unpadded.toString();
};
exports.addRandomMobileNumbers = function (people) {
    for (var _i = 0, people_4 = people; _i < people_4.length; _i++) {
        var person = people_4[_i];
        person.mobile = "07" + randomThreeDigitNumber(0, 100) + " " + randomThreeDigitNumber(0, 100) + randomThreeDigitNumber(0, 100);
    }
    return people;
};
