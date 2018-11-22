"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var copsnrobbers_1 = require("./copsnrobbers");
console.log("Running tests...");
var testSuite = new testRunner_1.Suite('Cops n Robbers tests');
var game = new copsnrobbers_1.Game();
testSuite.assertEqualGroup('Game settings', [
    {
        name: "Able to set damage",
        compare: game.damageAmount,
        to: 10
    }
]);
//setup code
var character = new copsnrobbers_1.Character();
testSuite.assertEqualGroup('Character class', [
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
testSuite.assertEqualGroup('Health management', [
    {
        name: "Health reduces when taking a hit",
        compare: character.health,
        to: 90
    }
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
testSuite.assertEqualGroup('Health management when dead', [
    {
        name: "Health never goes below 0",
        compare: character.health,
        to: 0
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
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup('Customise damage', [
    {
        name: "Damage amount is customisable",
        compare: character.health,
        to: 98
    }
]);
var cop = new copsnrobbers_1.Character();
var robber = new copsnrobbers_1.Character();
cop.shootAt(robber, game.damageAmount);
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
    }
]);
cop.health = 29;
testSuite.assertEqualGroup('Character is Unhealthy', [
    {
        name: "Health amount of 29 is not healthy",
        compare: cop.isHealthy(),
        to: false
    }
]);
cop.health = 30;
testSuite.assertEqualGroup('Character is Healthy', [
    {
        name: "Health amount of 30 is healthy",
        compare: cop.isHealthy(),
        to: true
    }
]);
cop.health = 75;
testSuite.assertEqualGroup('Character is Healthy', [
    {
        name: "Health amount of 75 is healthy",
        compare: cop.isHealthy(),
        to: true
    }
]);
cop.health = 0;
testSuite.assertEqualGroup('Character 0 is not healthy', [
    {
        name: "Health amount of 0 is not healthy",
        compare: cop.isHealthy(),
        to: false
    }
]);
testSuite.assertEqualGroup('RGB calculation with health 0', [
    {
        name: "Health 0",
        compare: cop.getHealthColor(),
        to: 'rgb(255,0,0)'
    }
]);
cop.health = 100;
testSuite.assertEqualGroup('RGB calculation with health 100', [
    {
        name: "Health 100",
        compare: cop.getHealthColor(),
        to: 'rgb(0,255,0)'
    }
]);
testSuite.assertEqualGroup('Active key', [
    {
        name: "Defaults exist",
        compare: cop.activeKey,
        to: 'a'
    }
]);
var keyChar = new copsnrobbers_1.Character(['q', 'w', 's']);
testSuite.assertEqualGroup('Active key', [
    {
        name: "Defaults exist",
        compare: keyChar.activeKey,
        to: 'a'
    }
]);
