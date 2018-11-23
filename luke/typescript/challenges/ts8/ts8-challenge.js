"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(data) {
        var _this = this;
        this.canFitOnANameCard = function () { return _this.name.length <= 6; };
        this.getLifeExpectancy = function () { return _this.isVegetarian ? 90 : 95; };
        this.yearsRemaining = function () { return _this.isVegetarian ? 90 - _this.age : 95 - _this.age; };
        this.canRideOnARollercoaster = function () { return _this.height >= 120; };
        this.canBuyBeer = function () { return _this.age >= 18 ? true : false; };
        this.getSummary = function () {
            var vegetarianMesage = _this.isVegetarian === true ? " is a vegetarian" : " likes meat";
            var deadMessage = _this.yearsRemaining() > 0 ? "has " + _this.yearsRemaining() + " years to live" : "should be dead";
            return _this.name + vegetarianMesage + ", is " + _this.height + "cm tall and " + deadMessage;
        };
        this.name = data.name,
            this.age = data.age,
            this.height = data.height,
            this.isVegetarian = data.isVegetarian;
    }
    return Person;
}());
exports.Person = Person;
