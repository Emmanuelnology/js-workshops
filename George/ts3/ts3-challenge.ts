/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

// WHY ARE THESE METHODS GIVING DIFFERENT RESULTS?
// export const minDateableAge = (usersAge) => { (usersAge/2) + 7;}

export function minDateableAge(usersAge) { 
  return (usersAge/2) + 7;
}

export function hasFever(tpemerature){
  if(tpemerature >= 37.5)
    return true;
  return false;
}

export function calcTVHeight(width) {
  return (width/16) * 9;
}

export function couldDate(age1,age2) {
  let minAge = minDateableAge(age1);
  let minAge2 = minDateableAge(age2);
  if(age2 >= minAge && age1 >= minAge2)
    return true;
  return false;

}

export function colorDarken(array,changeValue) {
  let red = changeColour(array.red, changeValue);
  let blue = changeColour(array.blue, changeValue);
  let green = changeColour(array.green, changeValue);
  return [red, green, blue];
}

function changeColour(colour, valueOfChange):number {
  if(colour >= valueOfChange)
    colour -= valueOfChange;
  else
    colour = 0;
  return colour;
}
