"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var ts1_challenge_1 = require("./ts1-challenge");
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('ts1');
testSuite.assertEqualGroup('ts1', [
    {
        compare: ts1_challenge_1.greet(),
        to: "Hello, My name is Bob Smith",
        name: 'Insert first and last name'
    },
    {
        compare: ts1_challenge_1.maryAgeDifference(),
        to: "Mary is 11 years older than me",
        name: 'Calculate difference'
    },
    {
        compare: ts1_challenge_1.nameLength(),
        to: "The total length of both names is 8 characters",
        name: 'Dynamically calculate name length'
    }
]);
testSuite.getSummary();
