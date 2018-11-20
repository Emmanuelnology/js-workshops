"use strict";
exports.__esModule = true;
function getActiveUsers(people) {
    var activeUsers = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.isActive)
            activeUsers.push(person);
    }
    return activeUsers; //change this line (and add others)
}
exports.getActiveUsers = getActiveUsers;
function findMatchingEyeColours(people) {
    var colorEye = [];
    for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
        var person = people_2[_i];
        if (person.eyeColor === )
            return [];
    } //change this line (and add others)
}
exports.findMatchingEyeColours = findMatchingEyeColours;
function getEmailAddress(people) {
    var activeInvalidEmail = [];
    var activeUsersArray = getActiveUsers(people);
    return ''; //change this line (and add others)
}
exports.getEmailAddress = getEmailAddress;
function getActiveUsersWithInvalidEmail(people) {
    return people; //change this line (and add others)
}
exports.getActiveUsersWithInvalidEmail = getActiveUsersWithInvalidEmail;
exports.addRandomMobileNumbers = function (people) {
    return people; //change this line (and add others)
};
