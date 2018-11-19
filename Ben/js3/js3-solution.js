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
  return (age / 2) + 7;
}

function hasFever(tempInCelsius){
  return tempInCelsius >= 37.5;
}

function calcTVHeight(width) {
  return (width / 16) * 9;
}

function couldDate(age1, age2) {
  if(age1 == age2) return true;
  var orderedAges = [age1,age2].sort();
  var lowerAge = orderedAges[0];
  var minAge = minDateableAge(orderedAges[1]);
  return lowerAge >= minAge;
}

function floor(number, amount) {
  return (number - amount < 0) ? 0 : number - amount;
}

function colorDarken(rgbArray, darkenAmount) {
  var red = floor(rgbArray[0], darkenAmount);
  var green = floor(rgbArray[1], darkenAmount);
  var blue = floor(rgbArray[2], darkenAmount);
  
  return [red, green, blue];
}

console.log("\n\nRunning tests...");
test.minDateableAge(minDateableAge);
test.hasFever(hasFever);
test.calcTVHeight(calcTVHeight);
test.couldDate(couldDate);
test.colorDarken(colorDarken);
test.summary();
