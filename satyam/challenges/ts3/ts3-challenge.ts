/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export function minDateableAge(myAge:number):number {
  return (myAge/2) + 7;
}

export function hasFever(tempInCels:number):boolean {
  return tempInCels >= 37.5;
}

export function calcTVHeight(width:number):number {
  return (width / 16) * 9;
}

export let couldDate = (age1:number, age2:number):boolean => {
  if (age1 == age2) return true;
  let ageSort:number[] = [age1, age2].sort();
  let lowerAge:number = ageSort[0];
  let minAge:number = minDateableAge(ageSort[1]);
  return lowerAge >= minAge;
}

function floor(number:number, amount:number) {
  return (number - amount < 0) ? 0 : number - amount;
}

interface colorValueRGB {
  red: number,
  green: number,
  blue: number
}

export let colorDarken = (rgb:colorValueRGB, darkenAmount:number) => {
  let red = floor(rgb.red, darkenAmount);
  let green = floor(rgb.green, darkenAmount);
  let blue = floor(rgb.blue, darkenAmount);
  
  return [red, green, blue];
}
