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
var loops = 0;
//need to create a function that searches the names of the children of liz
function findByName(head, name) {
    loops++;
    if (!("children" in head))
        return {};
    for (var _i = 0, _a = head.children; _i < _a.length; _i++) {
        var Person = _a[_i];
        if (Person.name === name)
            return Person;
        var results = findByName(Person, name);
        if (results)
            if (results.name == name)
                return results;
    }
    return undefined;
}
exports.findByName = findByName;
function findDescendants() {
}
exports.findDescendants = findDescendants;
function search(person, search) {
    var searchPerson = findByName(person, search);
    return searchPerson;
}
exports.search = search;
console.log("Count: " + loops);
