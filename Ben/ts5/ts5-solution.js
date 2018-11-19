"use strict";
exports.__esModule = true;
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
    var matches = [];
    if (sourcePerson != undefined && ('eyeColor' in sourcePerson)) {
        for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
            var person = people_2[_i];
            if (person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id) {
                matches.push(person.name);
            }
        }
    }
    return matches;
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
    var invalidPeople = [];
    var activeUsers = getActiveUsers(people);
    for (var _i = 0, activeUsers_1 = activeUsers; _i < activeUsers_1.length; _i++) {
        var person = activeUsers_1[_i];
        if ('email' in person) {
            if (person.email.indexOf('@') == -1)
                invalidPeople.push(person);
        }
        else
            invalidPeople.push(person);
    }
    return invalidPeople;
}
exports.getActiveUsersWithInvalidEmail = getActiveUsersWithInvalidEmail;
function addRandomMobileNumbers(people) {
    for (var _i = 0, people_4 = people; _i < people_4.length; _i++) {
        var person = people_4[_i];
        person.mobile = generateRandomMobileNumber();
    }
    return people;
}
exports.addRandomMobileNumbers = addRandomMobileNumbers;
function generateRandomMobileNumber() {
    var prefix = "07";
    var first = getRandomInteger(100, 1000);
    var second = getRandomInteger(100000, 1000000);
    return prefix + first + " " + second;
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
