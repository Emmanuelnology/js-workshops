"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(data) {
        var _this = this;
        this.canFitOnANameCard = function () { return _this.name.length <= 6; };
        this.getLifeExpectancy = function () { return _this.isVegetarian ? 90 : 95; };
        this.yearsRemaining = function () { return _this.getLifeExpectancy() - _this.age; };
        this.canRideOnARollercoaster = function () { return _this.height >= 120; };
        this.canBuyBeer = function () { return _this.age >= 18; };
        this.getSummary = function () {
            var vegetarianMessage = _this.isVegetarian ? "is a vegetarian" : "likes meat";
            var deadMessage = (_this.yearsRemaining() < 0) ? "should be dead" : "has " + _this.yearsRemaining() + " years to live";
            return _this.name + " " + vegetarianMessage + ", is " + _this.height + "cm tall and " + deadMessage;
        };
        this.isVegetarian = data.isVegetarian;
        this.name = data.name;
        this.age = data.age;
        this.height = data.height;
    }
    return Person;
}());
exports.Person = Person;
