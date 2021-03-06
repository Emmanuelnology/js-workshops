/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export let minDateableAge = (yourAge) => {
  return (yourAge/2+7); // change this line and add others if needed
}

export let hasFever = (temp) => {
return temp>=37.5;
 // change this line and add others if needed
}

export let calcTVHeight = (width) => {
return (width/16)*9;  // change this line and add others if needed
}

export let couldDate = (yourAge,theirAge) => {
  let ageSort = [yourAge,theirAge].sort()
  let lowerAge = ageSort[0]
  let minAge = minDateableAge(ageSort[1])
  
  if (yourAge===theirAge) return true;
  return minAge<=lowerAge;
  // change this line and add others if needed

}
function floor (number, amount)  {
  return (number - amount < 0) ? 0 : number - amount;
}

export function colorDarken(rgb, darkenAmount) {
let red = floor(rgb.red, darkenAmount);
let blue = floor(rgb.blue, darkenAmount);
let green = floor(rgb.green, darkenAmount);
return [red, green, blue]; // change this line and add others if needed

}
