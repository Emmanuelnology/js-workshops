"use strict";
exports.__esModule = true;
function isVegetarian(person) {
    return person.isVegetarian;
}
exports.isVegetarian = isVegetarian;
function canFitOnANameCard(person) {
    return person.name.length <= 6;
}
exports.canFitOnANameCard = canFitOnANameCard;
function getLifeExpectancy(person) {
    return person.isVegetarian ? 90 : 95;
}
exports.getLifeExpectancy = getLifeExpectancy;
function yearsRemaining(person) {
    return getLifeExpectancy(person) - person.age;
}
exports.yearsRemaining = yearsRemaining;
function canRideOnARollercoaster(person) {
    return person.height >= 120;
}
exports.canRideOnARollercoaster = canRideOnARollercoaster;
function canBuyBeer(person) {
    return person.age >= 18;
}
exports.canBuyBeer = canBuyBeer;
function getSummary(person) {
    var vegetarianMessage = person.isVegetarian ? "is a vegetarian" : "likes meat";
    var deadMessage = (yearsRemaining(person) < 0) ? "should be dead" : "has " + yearsRemaining(person) + " years to live";
    return person.name + " " + vegetarianMessage + ", is " + person.height + "cm tall and " + deadMessage;
}
exports.getSummary = getSummary;
