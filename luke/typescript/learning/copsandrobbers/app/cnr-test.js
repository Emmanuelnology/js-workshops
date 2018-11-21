"use strict";
exports.__esModule = true;
var testRunner_1 = require("../testRunner");
var copsandrobbers_1 = require("../app/copsandrobbers");
console.log("Test's are running.......");
var testSuite = new testRunner_1.Suite("copsnrobbers-test");
var game = new copsandrobbers_1.Game();
testSuite.assertEqualGroup('health settings', [{
        name: "Able to set damage",
        compare: game.damageAmount,
        to: 10
    }]);
//setup code
var character = new copsandrobbers_1.Character();
testSuite.assertEqualGroup('Character class', [{
        name: "there is a class called character",
        compare: character instanceof copsandrobbers_1.Character,
        to: true
    },
    {
        name: "Character must have health",
        compare: character.health,
        to: 100
    }
]);
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup('health management', [{
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
testSuite.assertEqualGroup('Health never goes below 0', [{
        name: "Health reduces when taking a hit",
        compare: character.health,
        to: 0
    }
]);
character.resetHealth();
// character.takeHit(game.damageAmount);
testSuite.assertEqualGroup('health reset', [{
        name: "Health is reset",
        compare: character.health,
        to: 100
    }]);
game.damageAmount = 2;
character.takeHit(game.damageAmount);
testSuite.assertEqualGroup('customisable damage', [{
        name: "Damage amount is customisable",
        compare: character.health,
        to: 98
    }]);
character.resetHealth();
character.shootAt;
var cop = new copsandrobbers_1.Character();
var robber = new copsandrobbers_1.Character();
cop.shootAt(robber, 5);
testSuite.assertEqualGroup('Shooting at each other', [{
        name: "Robber takes a hit",
        compare: robber.health,
        to: 98
    },
    testSuite.assertEqualGroup("cop's health doesnt change", {
        name: 'cop does not take damge',
        compare: cop.health,
        to: 100
    })]);
cop.resetHealth();
cop.takeHit();
// robber.resetHealth();
testSuite.assertEqualGroup('character is healthy', [{
        name: "health amount of 29 isnt health",
        compare: cop.isHealthy(),
        to: false
    }]);
cop.health = 30;
testSuite.assertEqualGroup('character is healthy', [{
        name: "health amount of 30 is health",
        compare: cop.isHealthy(),
        to: true
    }]);
cop.health = 75;
testSuite.assertEqualGroup('character is healthy', [{
        name: "health amount of 75 is health",
        compare: cop.isHealthy(),
        to: true
    }]);
cop.health = 0;
testSuite.assertEqualGroup('character is healthy', [{
        name: "health amount of 0 isnt health",
        compare: cop.isHealthy(),
        to: false
    }]);
