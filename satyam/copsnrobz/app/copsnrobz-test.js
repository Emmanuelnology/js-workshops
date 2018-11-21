"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var copsnrobz_1 = require("./copsnrobz");
var copsnrobz_2 = require("./copsnrobz");
console.log("Running tests...");
var testSuite = new testRunner_1.Suite('Cops n Robbers tests');
var game = new copsnrobz_2.Game();
testSuite.assertEqualGroup('Game settings', [
    {
        name: "Able to set damage",
        compare: game.damageAmount,
        to: 10
    },
]);
//setup code
var character = new copsnrobz_1.Character();
testSuite.assertEqualGroup('Character class', [
    {
        name: "There is a class called character",
        compare: character instanceof copsnrobz_1.Character,
        to: true
    },
    {
        name: "Character has health",
        compare: character.health,
        to: 100
    },
]);
character.takeHit(game.damageAmount); //90
testSuite.assertEqualGroup('Health Management', [
    {
        name: "Health reduces when taking a hit",
        compare: character.health,
        to: 90
    },
]);
character.takeHit(game.damageAmount); //80
character.takeHit(game.damageAmount); //70
character.takeHit(game.damageAmount); //60
character.takeHit(game.damageAmount); //50
character.takeHit(game.damageAmount); //40
character.takeHit(game.damageAmount); //30
character.takeHit(game.damageAmount); //20
character.takeHit(game.damageAmount); //10
character.takeHit(game.damageAmount); //0
character.takeHit(game.damageAmount); //0
testSuite.assertEqualGroup('Health Management when dead', [
    {
        name: "Health never drops below 0",
        compare: character.health,
        to: 0
    },
]);
character.resetHealth();
testSuite.assertEqualGroup('Health reset', [
    {
        name: "Health is reset using resetHealth",
        compare: character.health,
        to: 100
    },
]);
game.damageAmount = 2;
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup('Customise damage', [
    {
        name: "Damage amount is customisable",
        compare: character.health,
        to: 98
    },
]);
var cop = new copsnrobz_1.Character();
var robber = new copsnrobz_1.Character();
cop.shootAt(robber, game.damageAmount);
testSuite.assertEqualGroup('Pew pew', [
    {
        name: "Robber takes a hit when shot at",
        compare: robber.health,
        to: 98
    },
    {
        name: "Cops health doesnt change when shooting",
        compare: cop.health,
        to: 100
    },
]);
cop.resetHealth();
cop.takeHit(80);
testSuite.assertEqualGroup('Character is healthy', [
    {
        name: "Health amount of 20 is not healthy",
        compare: cop.isHealthy,
        to: false
    }
]);
testSuite.assertEqualGroup('Character is healthy', [
    {
        name: "Health amount of 20 is not healthy",
        compare: cop.isHealthy,
        to: false
    }
]);
