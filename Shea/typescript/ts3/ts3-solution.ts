/*

Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export function minDateableAge(age:number):number{
  return (age / 2) + 7;
}

export function hasFever(tempInCelsius:number):boolean{
  return tempInCelsius >= 37.5;
}

export function calcTVHeight(width:number):number {
  return (width / 16) * 9;
}

export function couldDate(age1:number, age2:number):boolean {
  if(age1 == age2) return true;
  let orderedAges = [age1,age2].sort();
  let lowerAge = orderedAges[0];
  let minAge = minDateableAge(orderedAges[1]);
  return lowerAge >= minAge;
}

function floor(number:number, amount:number) {
  return (number - amount < 0) ? 0 : number - amount;
}

interface RGBColor {
  red: number,
  green: number,
  blue: number
}

export function colorDarken(rgb:RGBColor, darkenAmount:number) {
  let red = floor(rgb.red, darkenAmount);
  let green = floor(rgb.green, darkenAmount);
  let blue = floor(rgb.blue, darkenAmount);
  
  return [red, green, blue];
}
