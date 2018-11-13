/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

var test = require("./js3-tests");
var yourAge = 100
var theirAge = 34
var temp = 22
var wdith = 16

function minDateableAge(yourAge){

  var age = (yourAge/2)+7;
  return age;

}


function hasFever(temp){

  var feverTemp = temp >= 37.5
  return feverTemp; // change this line and add others if needed

}

function calcTVHeight(tvWdith) {

  return true; // change this line and add others if needed
}

function couldDate(yourAge, theirAge) {

  var ageDiff = yourAge/2 + 7;
  var canDate = ageDiff <= theirAge
  return canDate;  // change this line and add others if needed
  console.log(ageDiff)
  console.log(canDate)
}

function colorDarken() {
  return [0,0,0]; // change this line and add others if needed

}

console.log("\n\nRunning tests...");
test.minDateableAge(minDateableAge);
test.hasFever(hasFever);
test.calcTVHeight(calcTVHeight);
test.couldDate(couldDate);
test.colorDarken(colorDarken);
test.summary();
