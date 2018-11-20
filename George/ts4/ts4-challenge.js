"use strict";
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
    if (person.isVegetarian)
        return 90;
    return 95;
}
exports.getLifeExpectancy = getLifeExpectancy;
function yearsRemaining(person) {
    return getLifeExpectancy(person) - person.age;
}
exports.yearsRemaining = yearsRemaining;
function canRideOnARollercoaster(person) {
    if (person.height >= 120)
        return true;
    return false;
}
exports.canRideOnARollercoaster = canRideOnARollercoaster;
function canBuyBeer(person) {
    return person.age >= 18;
}
exports.canBuyBeer = canBuyBeer;
function getSummary(person) {
    var vegetarianOrNotSentence = (isVegetarian(person) ? "is a vegetarian" : "likes meat");
    var deadOrAliveSentence = (yearsRemaining(person) > 0 ? "has " + yearsRemaining(person) + " years to live" : "should be dead");
    return person.name + " " + vegetarianOrNotSentence + ", is " + person.height + "cm tall and " + deadOrAliveSentence;
}
exports.getSummary = getSummary;
