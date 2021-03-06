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
  return true; // change this line and add others if needed
}

function canFitOnANameCard(personID){
  return true; // change this line and add others if needed
}

function getLifeExpectancy(personID) {
  return 0; // change this line and add others if needed
}

function yearsRemaining(personID){
  return 0; // change this line and add others if needed
}

function canRideOnARollercoaster(personID){
  return true; // change this line and add others if needed
}

function canBuyBeer(personID) {
  return true; // change this line and add others if needed
}

function getSummary(personID) {
  return ''; // change this line and add others if needed
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

