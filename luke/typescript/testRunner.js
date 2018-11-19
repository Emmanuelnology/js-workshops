"use strict";
exports.__esModule = true;
var Suite = /** @class */ (function () {
    function Suite(name) {
        this.name = name;
        this.total = 0;
        this.success = 0;
        this.showPasses = true;
    }
    Suite.prototype.assertEqual = function (test) {
        try {
            if (JSON.stringify(test.compare) === JSON.stringify(test.to)) {
                this.success++;
                if (this.showPasses)
                    colorLog("PASS " + this.groupName + ": " + test.name, 'green');
            }
            else {
                colorLog("FAIL " + this.groupName + ": " + test.name + "\n    " + JSON.stringify(test.compare) + " !== " + JSON.stringify(test.to), 'red');
            }
            this.total++;
        }
        catch (e) {
            this.handleError(e);
        }
    };
    Suite.prototype.assertEqualGroup = function (name, tests) {
        this.groupName = name;
        for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
            var test = tests_1[_i];
            this.assertEqual(test);
        }
    };
    Suite.prototype.assertRegex = function (test) {
        if (test.regex.test(test.string)) {
            this.success++;
            if (this.showPasses)
                colorLog("Pass " + this.groupName + ": " + test.name, 'green');
        }
        else {
            colorLog("FAIL " + this.groupName + ": " + test.name + "\n    " + test.string + " !== RegEx: " + test.regex.toString(), 'red');
        }
        this.total++;
    };
    Suite.prototype.getSummary = function () {
        console.log("\nRan " + this.success + "/" + this.total + " tests successfully");
    };
    Suite.prototype.handleError = function (e) {
        colorLog(e.name + "\n" + e.message + "\n" + e.stack, 'yellow');
    };
    return Suite;
}());
exports.Suite = Suite;
function colorLog(message, color) {
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
    console.log(colors[color] + message + colors.reset);
}
