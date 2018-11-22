"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var ts5_data_1 = require("./ts5-data");
var ts5_challenge_js_1 = require("./ts5-challenge.js");
console.log("\n\nRunning tests...");
var testSuite = new testRunner_1.Suite('ts4');
testSuite.assertEqualGroup('Get active users', [
    {
        compare: ts5_challenge_js_1.getActiveUsers(ts5_data_1.people).length,
        to: 3,
        name: 'Returns 3 users'
    },
    {
        compare: ts5_challenge_js_1.getActiveUsers(ts5_data_1.people)[0].name,
        to: 'Estrada Nolan',
        name: 'First result is Estrada'
    },
    {
        compare: ts5_challenge_js_1.getActiveUsers(ts5_data_1.people)[1].name,
        to: 'Laverne Andrews',
        name: 'Second result is Laverne'
    }
]);
testSuite.assertEqualGroup('Get matching eye colours', [
    {
        compare: ts5_challenge_js_1.findMatchingEyeColours(ts5_data_1.people, ts5_data_1.people[0]).length,
        to: 1,
        name: 'Returns 1 users'
    },
    {
        compare: ts5_challenge_js_1.findMatchingEyeColours(ts5_data_1.people, ts5_data_1.people[0])[0],
        to: 'Laverne Andrews',
        name: 'Matching eye color is only Laverne'
    },
    {
        compare: ts5_challenge_js_1.findMatchingEyeColours(ts5_data_1.people, ts5_data_1.people[5])[0],
        to: undefined,
        name: 'Eye color: Invalid person shows undefined'
    },
    {
        compare: ts5_challenge_js_1.findMatchingEyeColours(ts5_data_1.people, ts5_data_1.people[4])[0],
        to: 'Hull Woodward',
        name: 'Matching eye color is only Hull'
    },
    {
        compare: ts5_challenge_js_1.findMatchingEyeColours(ts5_data_1.people, ts5_data_1.people[1]),
        to: [],
        name: 'No eyeColor in source person returns blank array'
    }
]);
testSuite.assertEqualGroup('Get email address', [
    {
        compare: ts5_challenge_js_1.getEmailAddress(ts5_data_1.people, 2321),
        to: 'mariastanley@eyeris.com',
        name: 'Maria email address returns successfully'
    },
    {
        compare: ts5_challenge_js_1.getEmailAddress(ts5_data_1.people, 5151),
        to: undefined,
        name: 'Unknown ID returns undefined'
    },
    {
        compare: ts5_challenge_js_1.getEmailAddress(ts5_data_1.people, 4138),
        to: undefined,
        name: 'User without email address returns undefined'
    }
]);
testSuite.assertEqualGroup('Get active users with invalid email', [
    {
        compare: ts5_challenge_js_1.getActiveUsersWithInvalidEmail(ts5_data_1.people).length,
        to: 2,
        name: '2 total users returned'
    },
    {
        compare: ts5_challenge_js_1.getActiveUsersWithInvalidEmail(ts5_data_1.people)[0].name,
        to: 'Laverne Andrews',
        name: 'Laverne has inactive email address'
    },
    {
        compare: ts5_challenge_js_1.getActiveUsersWithInvalidEmail(ts5_data_1.people)[1].name,
        to: 'Maria Stanley',
        name: 'Maria has inactive email address'
    }
]);
var regex = new RegExp(/^(07\d{3}\s\d{6}$)/);
testSuite.groupName = "Mobile numbers";
for (var _i = 0, _a = ts5_challenge_js_1.addRandomMobileNumbers(ts5_data_1.people); _i < _a.length; _i++) {
    var person = _a[_i];
    testSuite.assertRegex({
        name: person.name + " mobile",
        string: person.mobile,
        regex: regex
    });
}
testSuite.getSummary();
