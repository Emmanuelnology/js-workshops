import { Suite } from "../testRunner";
import { Game, Character } from "./copsnrobbers";

console.log("Running tests...");

let testSuite = new Suite("Cops n Robbers tests");

let game = new Game ();

testSuite.assertEqualGroup("Game settings",[
  {
    name: "Able to set damage",
    compare: game.damageAmount,
    to: 10
  }
]
);

let character = new Character ();

testSuite.assertEqualGroup("Character class",[
  {
    name: "There is a class called character",
    compare: character instanceof Character,
    to: true
  },
  {
    name: "Character has health",
    compare: character.health,
    to: 100
  }
]
);

character.takeHit(game.damageAmount);

testSuite.assertEqualGroup("Health management",[
  {
    name: "Health reduces when taking a hit",
    compare: character.health,
    to: 90
  }
]
);

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

testSuite.assertEqualGroup("Health management when dead",[
  {
    name: "Health never goes below 0",
    compare: character.health,
    to: 0
  }
]
);

character.resetHealth();

testSuite.assertEqualGroup("Health reset",[
  {
    name: "Health is reset using resetHealth",
    compare: character.health,
    to: 100
  }
]
);

game.damageAmount = 2;
character.takeHit(game.damageAmount);

testSuite.assertEqualGroup("Customise damage",[
  {
    name: "Damage amount is cutomisable",
    compare: character.health,
    to: 98
  }
]
);

let cop = new Character ();
let robber = new Character ();
cop.shootAt(robber, game.damageAmount);

testSuite.assertEqualGroup("Shooting each other",[
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
]
);

cop.health = 29;

testSuite.assertEqualGroup("Character is unhealthy",[
  {
    name: "Health amount of 29 is not healthy",
    compare: cop.isHealthy(),
    to: false
  }
]
);

cop.health = 0;

testSuite.assertEqualGroup("Character is unhealthy",[
  {
    name: "Health amount of 0 is not healthy",
    compare: cop.isHealthy(),
    to: false
  }
]
);

cop.health = 30;

testSuite.assertEqualGroup("Character is healthy",[
  {
    name: "Health amount of 30 is healthy",
    compare: cop.isHealthy(),
    to: true
  }
]
);


cop.health = 75;

testSuite.assertEqualGroup("Character is healthy",[
  {
    name: "Health amount of 75 is healthy",
    compare: cop.isHealthy(),
    to: true
  }
]
);