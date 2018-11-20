"use strict";
exports.__esModule = true;
exports.isVegetarian = function (person) { return person.isVegetarian; };
exports.canFitOnANameCard = function (person) { return person.name.length <= 6; };
exports.getLifeExpectancy = function (person) { return person.isVegetarian ? 90 : 95; };
exports.yearsRemaining = function (person) { return exports.getLifeExpectancy(person) - person.age; };
exports.canRideOnARollercoaster = function (person) { return person.height >= 120; };
exports.canBuyBeer = function (person) { return person.age >= 18; };
exports.getSummary = function (person) {
    var vegetarianMessage = person.isVegetarian ? "is a vegetarian" : "likes meat";
    var yearsToLiveMessage = (exports.yearsRemaining(person) < 0) ? "should be dead" : "has " + exports.yearsRemaining(person) + " years to live";
    return person.name + " " + vegetarianMessage + ", is " + person.height + "cm tall and " + yearsToLiveMessage;
};
