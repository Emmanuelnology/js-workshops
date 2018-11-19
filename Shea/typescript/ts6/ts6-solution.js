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
var data_1 = require("./data");
var loops = 0;
function findByName(head, name) {
    loops++;
    if (!("children" in head))
        return {};
    for (var _i = 0, _a = head.children; _i < _a.length; _i++) {
        var person = _a[_i];
        if (person.name == name)
            return person;
        var result = findByName(person, name);
        if (result)
            if (result.name == name)
                return result;
    }
    return undefined;
}
function findDescendants(head) {
    loops++;
    var matches = [];
    if (head)
        if ("children" in head) {
            for (var _i = 0, _a = head.children; _i < _a.length; _i++) {
                var person = _a[_i];
                matches.push(person.name);
                matches = matches.concat(findDescendants(person));
            }
        }
    return matches;
}
function search(person, text) {
    var startPerson = findByName(person, text);
    return findDescendants(startPerson);
}
console.log(search(data_1.liz, 'Charles'));
console.log("Count: " + loops);
//Tests find descendants
// liz
// liz.children[0]
// Dont forget negatives
