/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

var test = require("./js3-tests");

function minDateableAge(age){
  return (age / 2) + 7; // change this line and add others if needed
}

function hasFever(temp){
  return temp >= 37.5; // change this line and add others if needed
}

function calcTVHeight(width) {
  return (width / 16 * 9); // change this line and add others if needed
}

function couldDate(age1, age2) {
  if (age1 == age2) return true;
  var ageSort = [age1,age2].sort();
  var lowerAge = ageSort[0];
  var minAge = minDateableAge(ageSort[1]);
  return lowerAge >= minAge; // change this line and add others if needed

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
