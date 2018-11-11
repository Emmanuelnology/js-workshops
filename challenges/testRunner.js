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
        if (JSON.stringify(test.compare) === JSON.stringify(test.to)) {
            this.success++;
            if (this.showPasses)
                colorLog(this.groupName + ": / " + test.name, 'green');
        }
        else {
            colorLog(this.groupName + ": X " + test.name + "\n" + JSON.stringify(test.compare) + " !== " + JSON.stringify(test.to), 'red');
        }
        this.total++;
    };
    Suite.prototype.assertRegex = function (test) {
        if (test.regex.test(test.string)) {
            this.success++;
            if (this.showPasses)
                colorLog(this.groupName + ": / " + test.name, 'green');
        }
        else {
            colorLog(this.groupName + ": X " + test.name + "\n" + test.string + " !== " + test.regex.toString(), 'red');
        }
        this.total++;
    };
    Suite.prototype.getSummary = function () {
        console.log("\nRan " + this.success + "/" + this.total + " tests successfully");
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
