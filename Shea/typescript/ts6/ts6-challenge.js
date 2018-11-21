"use strict";
exports.__esModule = true;
exports.findByName = function (startingPerson, searchName) {
    if (startingPerson.name === searchName)
        return startingPerson;
    if (!("children" in startingPerson))
        return undefined;
    for (var _i = 0, _a = startingPerson.children; _i < _a.length; _i++) {
        var child = _a[_i];
        var recursion = exports.findByName(child, searchName);
        if (recursion != undefined)
            return recursion;
    }
};
exports.findDescendants = function (prescendant) {
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
function search() {
}
exports.search = search;
