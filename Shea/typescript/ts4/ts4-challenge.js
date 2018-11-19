"use strict";
exports.__esModule = true;
/*
The data file contains information for 7 people, along with an interface declaration for person

Create functions that take a person object and return the following

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy :number
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :string

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

Example friendly summaries:
- Steven is a vegetarian, is 100cm tall and has 12 years to live
- Fred likes meat, is 153cm tall and has 7 years to live

*/
exports.isVegetarian = function (person) {
    return person.isVegetarian;
};
exports.canFitOnANameCard = function (person) {
    return person.name.length <= 6;
};
exports.getLifeExpectancy = function (person) {
    return person.isVegetarian ? 90 : 95;
};
exports.yearsRemaining = function (person) {
    return exports.getLifeExpectancy(person) - person.age;
};
exports.canRideOnARollercoaster = function (person) {
    return person.height >= 120;
};
exports.canBuyBeer = function (person) {
    return person.age >= 18;
};
exports.getSummary = function (person) {
    var vegetarianMessage = exports.isVegetarian(person) ? " is a vegetarian," : " likes meat,";
    var deadMessage = exports.yearsRemaining(person) < 0 ? " should be dead" : " has " + exports.yearsRemaining(person) + " years to live";
    return person.name + vegetarianMessage + " is " + person.height + "cm tall and" + deadMessage;
};
