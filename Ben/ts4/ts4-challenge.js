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
exports.isVegetarian = function (person) { return person.isVegetarian; };
exports.canFitOnANameCard = function (person) { return person.name.length <= 6; };
exports.getLifeExpectancy = function (person) {
    if (exports.isVegetarian(person)) {
        return 90;
    }
    return 95;
};
exports.yearsRemaining = function (person) { return exports.getLifeExpectancy(person) - person.age; };
exports.canRideOnARollercoaster = function (person) { return person.height >= 120; };
exports.canBuyBeer = function (person) { return person.age >= 18; };
function getSummary() {
    return ''; // change this line and add others if needed
}
exports.getSummary = getSummary;
