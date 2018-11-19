"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var ts2_solution_1 = require("./ts2-solution");
var colors = ['violet', 'green', 'blue', 'yellow'];
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('ts2');
testSuite.assertEqualGroup('ts2', [
    {
        compare: ts2_solution_1.fixColors(colors, 0),
        to: ['red', 'green', 'blue', 'yellow'],
        name: 'Fix index 0'
    },
    {
        compare: ts2_solution_1.fixColors(colors, 1),
        to: ['violet', 'red', 'blue', 'yellow'],
        name: 'Fix index 1'
    },
    {
        compare: ts2_solution_1.fixColors(colors, 2),
        to: ['violet', 'green', 'blue', 'yellow'],
        name: 'Fix index 2'
    },
    {
        compare: ts2_solution_1.fixColors(colors, 3),
        to: ['violet', 'green', 'blue', 'yellow'],
        name: 'Fix index 3'
    }
]);
testSuite.getSummary();
