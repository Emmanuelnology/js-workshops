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
exports.findByName = function (main, name) {
    if (main.name === name)
        return main;
    else if (!(main.hasOwnProperty("children")))
        return undefined;
    else {
        for (var _i = 0, _a = main.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var value = exports.findByName(child, name);
            if (value != undefined)
                if (value.name === name)
                    return value;
        }
    }
};
exports.findDescendants = function (person) {
    var descendants = [];
    return descendants;
};
function search(b, c) {
}
exports.search = search;
