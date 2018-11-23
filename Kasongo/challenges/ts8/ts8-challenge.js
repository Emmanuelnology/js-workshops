"use strict";
/*
The data file contains information for 7 people, along with an interface declaration for person.
Import the person interface and use it to help type your code

Create a class named Person that take a person object and has the following functions:

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
var Person = /** @class */ (function () {
    function Person(data) {
        var _this = this;
        this.canFitOnANameCard = function () {
            return _this.name.length <= 6;
        };
        this.getLifeExpectancy = function () {
            if (_this.isVegetarian) {
                return 90;
            }
            else {
                return 95;
            }
        };
        this.yearsRemaining = function () {
            return _this.getLifeExpectancy() - (_this.age);
        };
        this.canRideOnARollercoaster = function () {
            return (_this.height >= 120);
        };
        this.canBuyBeer = function () {
            return (_this.age >= 18);
        };
        this.getSummary = function () {
            var vegMessage = (_this.isVegetarian) ? "is a vegetarian" : "likes meat";
            var deadMessage = (_this.yearsRemaining()) < 0 ? "should be dead" : "has " + (_this.yearsRemaining()) + " years to live";
            return (_this.name + " " + vegMessage + ", " + "is " + _this.height + "cm tall" + " and " + deadMessage);
        };
        this.age = data.age;
        this.name = data.name;
        this.height = data.height;
        this.isVegetarian = data.isVegetarian;
    }
    return Person;
}());
exports.Person = Person;
