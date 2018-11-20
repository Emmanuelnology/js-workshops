/*
Create functions that return the following:

minDateableAge(){} // half your age + 7
hasFever(){} //fever or not in celsius
calcTVHeight() {} Given a width on a 16:9 tv, calculate the height
couldDate(){} // two people, could they date (deal with ages either way round)
colorDarken(){} // [red, green, blue] (0-255), darkenAmount - don't let the amount drop below 0

*/

export let minDateableAge = (age:number):number =>age/2+ 7;

export let hasFever = (tempCelsius:number):boolean => tempCelsius >= 37.5;

export let calcTVHeight = (width:number):number => (width / 16) * 9; 


export let couldDate = (age1:number, age2:number):boolean => {
  if (age1 == age2) return true;
    const orderedAges:number[] = [age1, age2].sort();
    const lowerAge:number= orderedAges[0];
    const minAge:number = minDateableAge(orderedAges[1]);
    return lowerAge >= minAge;
}

export let floor = (number:number, amount:number):number => {
  return (number - amount < 0) ? 0 : number - amount;
}
interface RGBColor {
  red: number,
  green:number,
  blue:number
}

export let colorDarken = (rgb:RGBColor, darkenAmount:number) => {
  let red = floor(rgb.red, darkenAmount);
  let green = floor(rgb.green, darkenAmount);
  let blue = floor(rgb.blue, darkenAmount);

  return [red, green, blue];
}
