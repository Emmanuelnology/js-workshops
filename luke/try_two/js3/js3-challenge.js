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

function calcTVHeight(tvWidth) {
var tvWidth = (tvWidth/16)*9;
  return tvWidth; // change this line and add others if needed
}

function couldDate(yourAge, theirAge) {
  var ageSort = [yourAge, theirAge].sort();
  var lowerAge = ageSort[0];
  var minAge = minDateableAge(ageSort[1]); //has to be a function

  if (yourAge === theirAge) return true;
  return minAge <= lowerAge
  // change this line and add others if needed
}

function floor (number, amount){
  return (number - amount < 0 ) ? 0 : number - amount;
}

function colorDarken(rgbArray, darkenAmount) {
  var red =  floor(rgbArray[0], darkenAmount);
  var blue =  floor(rgbArray[1], darkenAmount);
  var green =  floor(rgbArray[2], darkenAmount);
  return [red, blue, green]; // change this line and add others if needed

}

console.log("\n\nRunning tests...");
test.minDateableAge(minDateableAge);
test.hasFever(hasFever);
test.calcTVHeight(calcTVHeight);
test.couldDate(couldDate);
test.colorDarken(colorDarken);
test.summary();
