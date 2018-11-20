"use strict";
exports.__esModule = true;
exports.isVegetarian = function (person) { return person.isVegetarian; }; // change this line and add others if needed
exports.canFitOnANameCard = function (person) { return person.name.length <= 6; }; // change this line and add others if needed
exports.getLifeExpectancy = function (person) { return person.isVegetarian ? 90 : 95; };
exports.yearsRemaining = function (person) { return exports.getLifeExpectancy(person) - person.age; };
exports.canRideOnARollercoaster = function (person) { return person.height >= 1.2; };
exports.canBuyBeer = function (person) { return person.age >= 18; };
exports.getSummary = function (person) {
    var vegMessage = (person.isVegetarian) ? "is a vegetarian" : "likes meat";
    var deadMessage = (exports.yearsRemaining(person)) < 0 ? "should be dead" : "has" + (exports.yearsRemaining(person)) + "to live";
    return person.name + " " + vegMessage + ", " + "is " + person.height + "cm tall" + " and has " + deadMessage;
};
