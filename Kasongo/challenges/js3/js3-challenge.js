/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

var test = require("./js3-tests");

function minDateableAge(x){
  var age = x/2 + 7;
  return age; // change this line and add others if needed
}

function hasFever(tempCelsius){
  if (tempCelsius>= 37) {
    return true;
  } else {
    return false;
  }
}

function calcTVHeight(screenWidth) {
  var height = screenWidth * 1.777;
  return height; // change this line and add others if needed
}

function couldDate(ageA, ageB) {
  if (ageA - ageB <= 10 || ageB- ageA <= 10) {
    return true;
  } else {
    return false;
  }
   // change this line and add others if needed
}

function colorDarken(red, green, blue) {
  if (red <= 0 || green <= 0 || blue <= 0 ) {
    return dark;
  } else {
    return [red, green, blue];
  } // change this line and add others if needed
}

console.log("\n\nRunning tests...");
test.minDateableAge(minDateableAge);
test.hasFever(hasFever);
test.calcTVHeight(calcTVHeight);
test.couldDate(couldDate);
test.colorDarken(colorDarken);
test.summary();
