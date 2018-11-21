"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var copsnrobbers_1 = require("./copsnrobbers");
var copsnrobbers_2 = require("./copsnrobbers");
console.log("Running tests...");
var testSuite = new testRunner_1.Suite('Cops n Robbers tests');
var game = new copsnrobbers_2.Game();
var character = new copsnrobbers_1.Character();
testSuite.assertEqualGroup('Character management', [
    {
        name: "Character has health",
        compare: character.health,
        to: 100
    }
]);
character.takeHit(10);
testSuite.assertEqualGroup('Health management when dead', [
    {
        name: "health never goes below 0",
        compare: character.health,
        to: 90
    }
]);
testSuite.assertEqualGroup('Game settings', [
    {
        name: "Able to set damage",
        compare: game.damageAmount,
        to: 10
    }
]);
character.resetHealth();
testSuite.assertEqualGroup('Health reset', [
    {
        name: "Health is reset using resetHealth",
        compare: character.health,
        to: 100
    }
]);
game.damageAmount = 2;
character.takeHit(game.damageAmount); //98
testSuite.assertEqualGroup('Customise damage', [
    {
        name: "Damage amount is customisable",
        compare: character.health,
        to: 98
    }
]);
var cop = new copsnrobbers_1.Character();
var robber = new copsnrobbers_1.Character();
cop.shootAt(robber, 2);
testSuite.assertEqualGroup('Shooting at each other', [
    {
        name: "Robber takes a hit when shot at",
        compare: robber.health,
        to: 98
    },
    {
        name: "Cop's health doesn't change when shooting",
        compare: cop.health,
        to: 100
    },
]);
cop.health = 29;
testSuite.assertEqualGroup('Character is healthy', [
    {
        name: "Health amount of 29 is not healthy",
        compare: cop.isHealthy,
        to: false
    }
]);
