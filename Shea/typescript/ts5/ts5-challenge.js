"use strict";
exports.__esModule = true;
exports.getActiveUsers = function (people) {
    var activeUsers = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.isActive === true)
            activeUsers.push(person);
    }
    return activeUsers;
};
exports.findMatchingEyeColours = function (people, comparison) {
    var matches = [];
    if (comparison != undefined && ('eyeColor' in comparison)) {
        for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
            var person = people_2[_i];
            if (person.eyeColor === comparison.eyeColor && person.id != comparison.id) {
                matches.push(person.name);
            }
        }
    }
    return matches;
};
exports.getEmailAddress = function (people, id) {
    for (var _i = 0, people_3 = people; _i < people_3.length; _i++) {
        var person = people_3[_i];
        if (person.id === id)
            return person.email;
    }
};
exports.getActiveUsersWithInvalidEmail = function (people) {
    var invalidUsers = [];
    var activeUsers = exports.getActiveUsers(people);
    for (var _i = 0, activeUsers_1 = activeUsers; _i < activeUsers_1.length; _i++) {
        var person = activeUsers_1[_i];
        if (person.hasOwnProperty("email") != true)
            invalidUsers.push(person);
        else if (person.email.indexOf('@') == -1)
            invalidUsers.push(person);
    }
    return invalidUsers;
};
var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var generateMobileNumber = function () {
    var areaCode = "07";
    var first = generateRandomNumber(100, 1000);
    var second = generateRandomNumber(10000, 1000000);
    return areaCode + first + " " + second;
};
function addRandomMobileNumbers(people) {
    for (var _i = 0, people_4 = people; _i < people_4.length; _i++) {
        var person = people_4[_i];
        person.mobile = generateMobileNumber();
    }
    return people;
}
exports.addRandomMobileNumbers = addRandomMobileNumbers;
