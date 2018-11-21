"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var copsnrobbers_1 = require("./copsnrobbers");
console.log("Running tests...");
var testSuite = new testRunner_1.Suite("Cops n Robbers tests");
var game = new copsnrobbers_1.Game();
testSuite.assertEqualGroup("Game settings", [
    {
        name: "Able to set damage",
        compare: game.damageAmount,
        to: 10
    }
]);
var character = new copsnrobbers_1.Character();
testSuite.assertEqualGroup("Character class", [
    {
        name: "There is a class called character",
        compare: character instanceof copsnrobbers_1.Character,
        to: true
    },
    {
        name: "Character has health",
        compare: character.health,
        to: 100
    }
]);
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup("Health management", [
    {
        name: "Health reduces when taking a hit",
        compare: character.health,
        to: 90
    }
]);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount);
character.takeHit(game.damageAmount); // reaches 0 here
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup("Health management when dead", [
    {
        name: "Health never goes below 0",
        compare: character.health,
        to: 0
    }
]);
character.resetHealth();
testSuite.assertEqualGroup("Health reset", [
    {
        name: "Health is reset using resetHealth",
        compare: character.health,
        to: 100
    }
]);
game.damageAmount = 2;
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup("Customise damage", [
    {
        name: "Damage amount is cutomisable",
        compare: character.health,
        to: 98
    }
]);
var cop = new copsnrobbers_1.Character();
var robber = new copsnrobbers_1.Character();
cop.shootAt(robber, game.damageAmount);
testSuite.assertEqualGroup("Shooting each other", [
    {
        name: "Robber takes hit when shot at",
        compare: robber.health,
        to: 98
    },
    {
        name: "Cop's health does not change when shooting",
        compare: cop.health,
        to: 100
    }
]);
