/*
The data file contains information for 7 people

Create functions that return the following

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy :number
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :string

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

Example friendly summaries:
- Steven is a vegetarian, is 100cm tall and has 12 years to live
- Fred likes meat, is 153cm tall and has 7 years to live

Use the test functions to test your results

*/
var test = require("./js4-tests");
var data = require("./js4-data");
people=data.people;

function isVegetarian(personID) {
  return people[personID][3];
}

function canFitOnANameCard(personID){
  var name = people[personID][0];
  return name.length <= 6;
}

function getLifeExpectancy(personID) {
  if (isVegetarian(personID)) {
    return 90;
  }
  return 95;
}

function yearsRemaining(personID) {
  var lifeExpectancy = getLifeExpectancy(personID);
  var age = people[personID][1];
  return lifeExpectancy-age;
}

function canRideOnARollercoaster(personID){
  var height = people[personID][2];
  return height >= 120;
}

function canBuyBeer(personID) {
  var age = people[personID][1];
  return age >=18;
}

function vegMessage(personID) {
  if (isVegetarian(personID)) {
    return "is a vegetarian";
  }
  return "likes meat";
}

function deadMessage(personID) {
  if (yearsRemaining(personID) < 0) {
    return "should be dead";
  }
  return "has " + yearsRemaining(personID) + " years to live";
}

function getSummary(personID) {
  var name = people[personID][0]; 
  var height = people[personID][2];
  return name + " " + vegMessage(personID) + ", is " + height + "cm tall and " + deadMessage(personID);
}

console.log("\n\nRunning tests...");
test.isVegetarian(isVegetarian);
test.canFitOnANameCard(canFitOnANameCard);
test.getLifeExpectancy(getLifeExpectancy);
test.yearsRemaining(yearsRemaining);
test.canRideOnARollercoaster(canRideOnARollercoaster);
test.canBuyBeer(canBuyBeer);
test.getSummary(getSummary);
test.summary();

