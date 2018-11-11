test = require('../testRunner');

var people=[ //name, age, height, isVegetarian
  ['Bob', 12, 110, true],
  ['Harigon', 63, 150, true],
  ['Thomas', 23, 121, false],
  ['Sarah', 13, 119, false],
  ['Lucy', 78, 140, true],
  ['Dave', 93, 210, false],
  ['Doris', 94, 80, true],
];

function isVegetarian(personID) {
  return people[personID][3];
}

function canFitOnANameCard(personID){
  var name = people[personID][0];
  return (name.length <= 6);
}

function getLifeExpectancy(personID) {
  return isVegetarian(personID) ? 90:95;
}

function yearsRemaining(personID){
  var lifeExpectancy = getLifeExpectancy(personID);
  var age = people[personID][1];
  return lifeExpectancy - age;
}

function canRideOnARollercoaster(personID){
  var height = people[personID][2];
  return (height >= 120);
}

function canBuyBeer(personID) {
  var age=people[personID][1];
  return (age >=18);
}

function getSummary(personID) {
  var name = people[personID][0];
  var height = people[personID][2];

  var vegetarianMessage = isVegetarian(personID) ? "is a vegetarian" : "likes meat"; 
  
  if(yearsRemaining(personID)<0){
    deadMessage = "should be dead";
  } else {
    deadMessage = "has " + yearsRemaining(personID) + " years to live";
  }
  
  return name + " " + vegetarianMessage + ", is " + height + "cm tall and " + deadMessage;
}

test.run(isVegetarian, true, 0);
test.run(isVegetarian, false, 2);
test.run(isVegetarian, false, 5);
test.run(canFitOnANameCard, true, 0);
test.run(canFitOnANameCard, false, 1);
test.run(canFitOnANameCard, true, 2);
test.run(getLifeExpectancy, 90, 0);
test.run(getLifeExpectancy, 95, 3);
test.run(yearsRemaining, 78, 0);
test.run(yearsRemaining, 82, 3);
test.run(yearsRemaining, 2, 5);
test.run(yearsRemaining, -4, 6);
test.run(canRideOnARollercoaster, true, 1);
test.run(canRideOnARollercoaster, true, 2);
test.run(canRideOnARollercoaster, false, 3);
test.run(canBuyBeer, true, 2);
test.run(canBuyBeer, false, 3);
test.run(canBuyBeer, true, 5);
test.run(getSummary, "Bob is a vegetarian, is 110cm tall and has 78 years to live", 0);
test.run(getSummary, "Thomas likes meat, is 121cm tall and has 72 years to live", 2);
test.run(getSummary, "Doris is a vegetarian, is 80cm tall and should be dead", 6);

test.show();