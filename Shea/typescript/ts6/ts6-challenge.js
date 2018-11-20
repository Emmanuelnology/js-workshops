"use strict";
exports.__esModule = true;
exports.findByName = function (name) {
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
