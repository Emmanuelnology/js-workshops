"use strict";
exports.__esModule = true;
exports.getActiveUsers = function (people) {
    var peopleActive = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.isActive)
            peopleActive.push(person);
        {
        }
        return peopleActive;
    }
};
exports.findMatchingEyeColours = function (people, sourcePerson) {
    var peopleMatching = [];
    if (sourcePerson != undefined && ('eyeColor' in sourcePerson)) {
        for (var _i = 0, people_2 = people; _i < people_2.length; _i++) {
            var person = people_2[_i];
            if (person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id) {
                peopleMatching.push(person.name);
            }
        }
        return peopleMatching;
    }
};
exports.getEmailAddress = function (people, id) {
    for (var _i = 0, people_3 = people; _i < people_3.length; _i++) {
        var person = people_3[_i];
        if (person.id == id)
            return person.email;
        {
        }
        return person.email;
    }
};
exports.getActiveUsersWithInvalidEmail = function (people) {
    var invalidUsers = [];
    var listActive = exports.getActiveUsers(people);
    for (var _i = 0, listActive_1 = listActive; _i < listActive_1.length; _i++) {
        var person = listActive_1[_i];
        if ('email' in person) {
            if (person.email.indexOf('@') == -1)
                invalidUsers.push(person);
        }
        else {
            invalidUsers.push(person);
        }
        return invalidUsers; //change this line (and add others)
    }
};
exports.addRandomMobileNumbers = function (people) {
    for (var _i = 0, people_4 = people; _i < people_4.length; _i++) {
        var person = people_4[_i];
        person.mobile = exports.generateRandomNumber();
    }
    return people; //change this line (and add others)
};
exports.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.generateRandomNumber = function () {
    var prefix = '07';
    var firstPart = exports.getRandomNumber(100, 1000);
    var secondPart = exports.getRandomNumber(100, 10000);
    return prefix + ' ' + firstPart + ' ' + secondPart;
};
