"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var ts4_data_1 = require("./ts4-data");
var ts4_challenge_1 = require("./ts4-challenge");
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('ts4');
testSuite.assertEqualGroup('Is Vegetarian', [
    {
        compare: ts4_challenge_1.isVegetarian(ts4_data_1.people[0]),
        to: true,
        name: 'Bob is vegetarian'
    },
    {
        compare: ts4_challenge_1.isVegetarian(ts4_data_1.people[1]),
        to: true,
        name: 'Thomas is not vegetarian'
    },
    {
        compare: ts4_challenge_1.isVegetarian(ts4_data_1.people[5]),
        to: false,
        name: 'Dave is not vegetarian'
    }
]);
testSuite.assertEqualGroup('Can fit on name card', [
    {
        compare: ts4_challenge_1.canFitOnANameCard(ts4_data_1.people[0]),
        to: true,
        name: 'Bob can fit on a name card'
    },
    {
        compare: ts4_challenge_1.canFitOnANameCard(ts4_data_1.people[1]),
        to: false,
        name: 'Harigon cannot fit on a name card'
    },
    {
        compare: ts4_challenge_1.canFitOnANameCard(ts4_data_1.people[2]),
        to: true,
        name: 'Thomas can fit on a name card'
    }
]);
testSuite.assertEqualGroup('Life expectancy', [
    {
        compare: ts4_challenge_1.getLifeExpectancy(ts4_data_1.people[0]),
        to: 90,
        name: '90 total years'
    },
    {
        compare: ts4_challenge_1.getLifeExpectancy(ts4_data_1.people[1]),
        to: 90,
        name: '90 total years'
    },
    {
        compare: ts4_challenge_1.getLifeExpectancy(ts4_data_1.people[2]),
        to: 95,
        name: '95 total years'
    }
]);
testSuite.assertEqualGroup('Years remaining', [
    {
        compare: ts4_challenge_1.yearsRemaining(ts4_data_1.people[0]),
        to: 78,
        name: 'Bob will live for 78 years'
    },
    {
        compare: ts4_challenge_1.yearsRemaining(ts4_data_1.people[3]),
        to: 78,
        name: 'Sarah will live for 78 years'
    },
    {
        compare: ts4_challenge_1.yearsRemaining(ts4_data_1.people[5]),
        to: 2,
        name: 'Dave will live for 2 years'
    },
    {
        compare: ts4_challenge_1.yearsRemaining(ts4_data_1.people[6]),
        to: -4,
        name: 'Doris will live for -4 years'
    }
]);
testSuite.assertEqualGroup('Can ride on a rollercoaster', [
    {
        compare: ts4_challenge_1.canRideOnARollercoaster(ts4_data_1.people[1]),
        to: true,
        name: 'Harigon can ride a rollercoaster'
    },
    {
        compare: ts4_challenge_1.canRideOnARollercoaster(ts4_data_1.people[2]),
        to: true,
        name: 'Thomas can ride a rollercoaster'
    },
    {
        compare: ts4_challenge_1.canRideOnARollercoaster(ts4_data_1.people[3]),
        to: false,
        name: 'Sarah is too short for a rollercoaster'
    }
]);
testSuite.assertEqualGroup('Can buy beer', [
    {
        compare: ts4_challenge_1.canBuyBeer(ts4_data_1.people[2]),
        to: true,
        name: 'Thomas can buy beer'
    },
    {
        compare: ts4_challenge_1.canBuyBeer(ts4_data_1.people[3]),
        to: false,
        name: 'Sarah cannot buy beer'
    },
    {
        compare: ts4_challenge_1.canBuyBeer(ts4_data_1.people[5]),
        to: true,
        name: 'Dave can buy beer'
    }
]);
testSuite.assertEqualGroup('Summary', [
    {
        compare: ts4_challenge_1.getSummary(ts4_data_1.people[0]),
        to: "Bob is a vegetarian, is 110cm tall and has 78 years to live",
        name: 'Bob'
    },
    {
        compare: ts4_challenge_1.getSummary(ts4_data_1.people[2]),
        to: "Thomas likes meat, is 121cm tall and has 77 years to live",
        name: 'Thomas'
    },
    {
        compare: ts4_challenge_1.getSummary(ts4_data_1.people[6]),
        to: "Doris is a vegetarian, is 80cm tall and should be dead",
        name: 'Doris'
    }
]);
testSuite.getSummary();
