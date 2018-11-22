"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('Suite Name');
testSuite.assertEqualGroup('Example test group', [
    {
        compare: 1,
        to: 1,
        name: '1 equals 1'
    }
]);
testSuite.getSummary();
