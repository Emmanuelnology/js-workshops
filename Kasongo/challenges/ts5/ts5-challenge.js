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
    var peopleActive = [];
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        if (person.isActive)
            peopleActive.push(person);
        {
        }
        return peopleActive;
    }
    export var findMatchingEyeColours = function (people, position) {
        var index;
        var peopleMatching = [];
        var hisEyes = people[position].eyeColor;
        for (var people_2, index_1 = 0; index_1 < people_2.length; index_1++) {
            var person = people_2[index_1].name;
            if (people_2[index_1].eyeColor == hisEyes)
                peopleMatching.push(person);
            {
            }
        }
        return peopleMatching; //change this line (and add others)
    };
    export function getEmailAddress() {
        return ''; //change this line (and add others)
    }
    export function getActiveUsersWithInvalidEmail(people) {
        return people; //change this line (and add others)
    }
    export function addRandomMobileNumbers(people) {
        return people; //change this line (and add others)
    }
};
