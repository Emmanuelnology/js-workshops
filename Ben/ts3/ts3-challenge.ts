/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export const minDateableAge = (age:number):number => age/2 + 7;

export const hasFever = (temperature:number):boolean => temperature >= 37.5;

export const calcTVHeight = (width:number):number => width/16 * 9;

export const couldDate = (age1:number, age2:number):boolean => {
  return (age1 === age2) ? true : (age1 > age2) ? age2 >= minDateableAge(age1) : age1 >= minDateableAge(age2);
}

interface RGB {
  red: number,
  green: number,
  blue: number  
}

const floor = (initial:number, subtracter:number):number => {
  if (subtracter >= initial) return 0;
  return Math.floor(initial - subtracter);
}


export const colorDarken = (colorArray:RGB, darkener:number):number[] => {
  let newRed:number = floor(colorArray.red, darkener);
  let newGreen:number = floor(colorArray.green, darkener);
  let newBlue:number = floor(colorArray.blue, darkener);
  return [newRed, newGreen, newBlue];
}
