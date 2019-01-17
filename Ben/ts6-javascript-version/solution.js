/*

JavaScript Algorithm Challenge

Import Liz from the data file
Create a function that will return a person object by name
Create a function which will traverse all of the data and find the names of any descendant provided
Create a function that takes two parameters (person and a search string) and outputs names of all the descendants of the search string

*/

"use strict";

var familyTree = require("./data");

var findByName = (startingPerson, name) => {
  if (startingPerson.name === name) {
    return startingPerson;
  }
  else if (!("children" in startingPerson)) {
    return undefined;
  }
  else {
    var children = startingPerson.children;
    for (var counter = 0; counter < children.length; counter++) {
      var child = children[counter];
      var found = findByName(child, name);
      if (found != undefined) {
        return found;
      }
    }
  }
};

var findDescendants = (person) => {
  var descendants = [];
  if ("children" in person) {
    var children = person.children;
    for (var counter = 0; counter < children.length; counter++) {
      var child = children[counter];
      descendants.push(child.name);
      descendants = descendants.concat(findDescendants(child));
    }
  }
  return descendants;
};

var search = (person, searchString) => {
  var startingPerson = findByName(person, searchString);
  return searchString + "'s descendants are " + findDescendants(startingPerson);
};

console.log(search(familyTree.liz, 'Charles'));
console.log(search(familyTree.liz, 'Anne'));
