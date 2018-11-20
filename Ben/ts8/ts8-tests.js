"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var ts8_data_1 = require("./ts8-data");
var ts8_challenge_1 = require("./ts8-challenge");
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('ts8');
var bob = new ts8_challenge_1.Person(ts8_data_1.people[0]);
var harigon = new ts8_challenge_1.Person(ts8_data_1.people[1]);
var thomas = new ts8_challenge_1.Person(ts8_data_1.people[2]);
var sarah = new ts8_challenge_1.Person(ts8_data_1.people[3]);
var dave = new ts8_challenge_1.Person(ts8_data_1.people[5]);
var doris = new ts8_challenge_1.Person(ts8_data_1.people[6]);
testSuite.assertEqualGroup('Is Vegetarian', [
    {
        compare: bob.isVegetarian,
        to: true,
        name: 'Bob is vegetarian'
    },
    {
        compare: harigon.isVegetarian,
        to: true,
        name: 'Thomas is not vegetarian'
    },
    {
        compare: dave.isVegetarian,
        to: false,
        name: 'Dave is not vegetarian'
    }
]);
testSuite.assertEqualGroup('Can fit on name card', [
    {
        compare: bob.canFitOnANameCard(),
        to: true,
        name: 'Bob can fit on a name card'
    },
    {
        compare: harigon.canFitOnANameCard(),
        to: false,
        name: 'Harigon cannot fit on a name card'
    },
    {
        compare: thomas.canFitOnANameCard(),
        to: true,
        name: 'Thomas can fit on a name card'
    }
]);
testSuite.assertEqualGroup('Life expectancy', [
    {
        compare: bob.getLifeExpectancy(),
        to: 90,
        name: '90 total years'
    },
    {
        compare: harigon.getLifeExpectancy(),
        to: 90,
        name: '90 total years'
    },
    {
        compare: thomas.getLifeExpectancy(),
        to: 95,
        name: '95 total years'
    }
]);
testSuite.assertEqualGroup('Years remaining', [
    {
        compare: bob.yearsRemaining(),
        to: 78,
        name: 'Bob will live for 78 years'
    },
    {
        compare: sarah.yearsRemaining(),
        to: 78,
        name: 'Sarah will live for 78 years'
    },
    {
        compare: dave.yearsRemaining(),
        to: 2,
        name: 'Dave will live for 2 years'
    },
    {
        compare: doris.yearsRemaining(),
        to: -4,
        name: 'Doris will live for -4 years'
    }
]);
testSuite.assertEqualGroup('Can ride on a rollercoaster', [
    {
        compare: harigon.canRideOnARollercoaster(),
        to: true,
        name: 'Harigon can ride a rollercoaster'
    },
    {
        compare: thomas.canRideOnARollercoaster(),
        to: true,
        name: 'Thomas can ride a rollercoaster'
    },
    {
        compare: sarah.canRideOnARollercoaster(),
        to: false,
        name: 'Sarah is too short for a rollercoaster'
    }
]);
testSuite.assertEqualGroup('Can buy beer', [
    {
        compare: thomas.canBuyBeer(),
        to: true,
        name: 'Thomas can buy beer'
    },
    {
        compare: sarah.canBuyBeer(),
        to: false,
        name: 'Sarah cannot buy beer'
    },
    {
        compare: dave.canBuyBeer(),
        to: true,
        name: 'Dave can buy beer'
    }
]);
testSuite.assertEqualGroup('Summary', [
    {
        compare: bob.getSummary(),
        to: "Bob is a vegetarian, is 110cm tall and has 78 years to live",
        name: 'Bob'
    },
    {
        compare: thomas.getSummary(),
        to: "Thomas likes meat, is 121cm tall and has 77 years to live",
        name: 'Thomas'
    },
    {
        compare: doris.getSummary(),
        to: "Doris is a vegetarian, is 80cm tall and should be dead",
        name: 'Doris'
    }
]);
testSuite.getSummary();
