"use strict";
exports.__esModule = true;
var total = 0;
var success = 0;
var suiteName = "";
var showPasses = false;
function setSuiteName(name) {
    suiteName = name;
}
exports.setSuiteName = setSuiteName;
function assertEqual(test) {
    if (JSON.stringify(test.compare) === JSON.stringify(test.to)) {
        success++;
        if (showPasses)
            log("/: " + test.name, 'green');
    }
    else {
        log("X: " + test.name + "\n" + JSON.stringify(test.compare) + " !== " + JSON.stringify(test.to), 'red');
    }
    total++;
}
exports.assertEqual = assertEqual;
function getSummary() {
    console.log("\nRan " + success + "/" + total + " tests successfully");
}
exports.getSummary = getSummary;
function log(message, color) {
    var colors = {
        reset: '\x1b[0m',
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m"
    };
    console.log(colors[color] + suiteName + ": " + message + colors.reset);
}
