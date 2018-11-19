"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var data_1 = require("./data");
var ts6_solution_1 = require("./ts6-solution");
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('ts6 - Arrays');
testSuite.assertEqualGroup('Find by name', [
    {
        compare: ts6_solution_1.findByName(data_1.liz, 'Charles'),
        to: data_1.liz.children[0],
        name: 'Charles'
    },
    {
        compare: ts6_solution_1.findByName(data_1.liz, 'William'),
        to: data_1.liz.children[0].children[0],
        name: 'William'
    },
    {
        compare: ts6_solution_1.findByName(data_1.liz, 'Andrew'),
        to: data_1.liz.children[2],
        name: 'Andrew'
    },
    {
        compare: ts6_solution_1.findByName(data_1.liz, 'Anne'),
        to: data_1.liz.children[1],
        name: 'Anne'
    },
    {
        compare: ts6_solution_1.findByName(data_1.liz, 'Harry'),
        to: data_1.liz.children[0].children[1],
        name: 'Harry'
    }
]);
testSuite.assertEqualGroup('Find Descendants', [
    {
        compare: ts6_solution_1.findDescendants(data_1.liz.children[0]),
        to: ['William', 'George', 'Charlotte', 'Louis', 'Harry'],
        name: 'Charles'
    },
    {
        compare: ts6_solution_1.findDescendants(data_1.liz.children[0].children[0]),
        to: ['George', 'Charlotte', 'Louis'],
        name: 'William'
    },
    {
        compare: ts6_solution_1.findDescendants(data_1.liz.children[2]),
        to: ["Beatrice", "Eugenie"],
        name: 'Andrew'
    },
    {
        compare: ts6_solution_1.findDescendants(data_1.liz.children[1]),
        to: ["Peter", "Savannah", "Isla", "Zara", "Mia", "Lena"],
        name: 'Anne'
    },
    {
        compare: ts6_solution_1.findDescendants(data_1.liz.children[0].children[1]),
        to: [],
        name: 'Harry'
    }
]);
testSuite.assertEqualGroup('Search', [
    {
        compare: ts6_solution_1.search(data_1.liz, 'Charles'),
        to: ['William', 'George', 'Charlotte', 'Louis', 'Harry'],
        name: 'Charles'
    },
    {
        compare: ts6_solution_1.search(data_1.liz, 'William'),
        to: ['George', 'Charlotte', 'Louis'],
        name: 'William'
    },
    {
        compare: ts6_solution_1.search(data_1.liz, 'Andrew'),
        to: ["Beatrice", "Eugenie"],
        name: 'Andrew'
    },
    {
        compare: ts6_solution_1.search(data_1.liz, 'Anne'),
        to: ["Peter", "Savannah", "Isla", "Zara", "Mia", "Lena"],
        name: 'Anne'
    },
    {
        compare: ts6_solution_1.search(data_1.liz, 'Harry'),
        to: [],
        name: 'Harry'
    }
]);
testSuite.getSummary();
