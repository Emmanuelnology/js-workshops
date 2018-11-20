"use strict";
/*

Typescript Algorithm Challenge

Import Liz and the interface from the data file

Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that will return a person object by name
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string
Count the number of times a function is run to return the search

*/
exports.__esModule = true;
var counter = 0;
exports.findByName = function (main, name) {
    counter++;
    if (main.name === name)
        return main;
    else if (!("children" in main))
        return undefined;
    for (var _i = 0, _a = main.children; _i < _a.length; _i++) {
        var child = _a[_i];
        var value = exports.findByName(child, name);
        if (value != undefined)
            return value;
    }
};
exports.findDescendants = function (person) {
    counter++;
    var descendants = [];
    if ("children" in person) {
        for (var _i = 0, _a = person.children; _i < _a.length; _i++) {
            var child = _a[_i];
            descendants.push(child.name);
            descendants = descendants.concat(exports.findDescendants(child));
        }
    }
    return descendants;
};
exports.search = function (person, searchString) {
    var startingPerson = exports.findByName(person, searchString);
    return exports.findDescendants(startingPerson);
};
