"use strict";
exports.__esModule = true;
exports.people = [
    {
        name: "Bob",
        age: 12,
        height: 110,
        isVegetarian: true
    },
    {
        name: "Harigon",
        age: 63,
        height: 150,
        isVegetarian: true
    },
    {
        name: "Thomas",
        age: 18,
        height: 121,
        isVegetarian: false
    },
    {
        name: "Sarah",
        age: 17,
        height: 119,
        isVegetarian: false
    },
    {
        name: "Lucy",
        age: 78,
        height: 140,
        isVegetarian: true
    },
    {
        name: "Dave",
        age: 93,
        height: 210,
        isVegetarian: false
    },
    {
        name: "Doris",
        age: 94,
        height: 80,
        isVegetarian: true
    },
];
exports.isVegetarian = function (people) {
    return people.isVegetarian;
    // change this line and add others if needed
};
exports.canFitOnANameCard = function (people) {
    return people.name.length <= 6;
    // change this line and add others if needed
};
exports.getLifeExpectancy = function (people) {
    return exports.isVegetarian(people) ? 90 : 95;
    // change this line and add others if needed
};
exports.yearsRemaining = function (people) {
    return exports.getLifeExpectancy(people) - people.age;
};
exports.canRideOnARollercoaster = function (people) {
    return people.height >= 120; // change this line and add others if needed
};
exports.canBuyBeer = function (people) {
    return people.age >= 18;
};
exports.getSummary = function (people) {
    var vegetarianMesage = exports.isVegetarian(people) === true ? " is a vegetarian" : " likes meat";
    var deadMessage = exports.yearsRemaining(people) > 0 ? "has " + exports.yearsRemaining(people) + " years to live" : "should be dead";
    return people.name + vegetarianMesage + ", is " + people.height + "cm tall and " + deadMessage;
    // change this line and add others if needed
};
