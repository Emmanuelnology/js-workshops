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
  return (age/2) + 7;
}

function hasFever(temp){
  return temp >= 37.5;
}

function calcTVHeight(width) {
  var height = (width/16) * 9
  return height;
}

function couldDate(age1,age2) {
  if (age1 === age2) {
    return true;
  }
  else if (age1 > age2) {
    return age2 >= minDateableAge(age1);
  }
  else {
    return age1 >= minDateableAge(age2);
  }
}

function floorSubtract(originalNumber,subtracter) {
  if (subtracter >= originalNumber) {
    return 0;
  }
  else {
    return Math.floor(originalNumber-subtracter);
  }
}

function colorDarken(colors,darkenAmount) {
  var red = floorSubtract(colors[0],darkenAmount);
  var green = floorSubtract(colors[1],darkenAmount);
  var blue = floorSubtract(colors[2],darkenAmount);
  return [red,green,blue];
}

console.log("\n\nRunning tests...");
test.minDateableAge(minDateableAge);
test.hasFever(hasFever);
test.calcTVHeight(calcTVHeight);
test.couldDate(couldDate);
test.colorDarken(colorDarken);
test.summary();
