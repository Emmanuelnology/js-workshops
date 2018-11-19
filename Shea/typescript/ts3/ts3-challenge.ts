/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export const minDateableAge = (age:number):number => age / 2 + 7;

export const hasFever = (temperature:number):boolean => temperature >= 37.5;

export const calcTVHeight = (width:number):number => width / 16 * 9;

export const couldDate = (age1:number, age2:number) => {
  if (age1 > age2) {
    return age2 >= (age1 / 2 + 7);
  }
  else if (age2 > age1) {
    return age1 >= (age2 / 2 + 7);
  }
  return true;
}

interface RGBColor {
  red: number,
  green: number,
  blue: number
}

export const colorDarken = (colorArray:RGBColor, darkenAmount:number) => {
  let red = colorArray.red - darkenAmount;
  let green = colorArray.green - darkenAmount;
  let blue = colorArray.blue - darkenAmount;

  if (red < 0) red = 0;
  if (green < 0) green = 0;
  if (blue < 0) blue = 0;

  return [red, green, blue];
}
