"use strict";
exports.__esModule = true;
/*

Typescript Algorithm Challenge

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string
Count the number of times a function is run to return the search

*/
var data_1 = require("./data");
var count = 0;
exports.findByName = function (startingPerson, searchName) {
    count++;
    if (startingPerson.name === searchName)
        return startingPerson;
    if (startingPerson.hasOwnProperty('children')) {
        for (var _i = 0, _a = startingPerson.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var recursion = exports.findByName(child, searchName);
            if (recursion != undefined)
                return recursion;
        }
    }
    return undefined;
};
exports.findDescendants = function (prescendant) {
    count++;
    var descendants = [];
    if (prescendant.hasOwnProperty('children')) {
        for (var _i = 0, _a = prescendant.children; _i < _a.length; _i++) {
            var child = _a[_i];
            descendants.push(child.name);
            descendants = descendants.concat(exports.findDescendants(child));
        }
    }
    return descendants;
};
function search(person, searchString) {
    var personObject = exports.findByName(person, searchString);
    return exports.findDescendants(personObject);
}
exports.search = search;
console.log(search(data_1.liz, 'Charles'));
console.log(count);
