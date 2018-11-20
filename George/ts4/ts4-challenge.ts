/*
The data file contains information for 7 people, along with an interface declaration for person

Create functions that take a person object and return the following

-- Whether they are vegetarian :boolean
-- Whether their name is too long to write on a name tag :boolean
-- Life expectancy :number
-- years before they die :number
-- Whether they can ride on a rollercoaster :boolean
-- Should already be dead :boolean
-- Can buy beer in the UK :boolean
-- Show a friendly summary of the person :string

Life expectancy of a Vegetarian: 90
Life expectancy of a Meat Eater: 95
Minimum height to ride on a rollercoaster: 1.2m
Name tag length ( Up to 6 characters)

Example friendly summaries:
- Steven is a vegetarian, is 100cm tall and has 12 years to live
- Fred likes meat, is 153cm tall and has 7 years to live

*/

export function isVegetarian(person):boolean {
  return person.isVegetarian;
}

export function canFitOnANameCard(person):boolean {
  return person.name.length <= 6;
}

export function getLifeExpectancy(person):number {
  if(person.isVegetarian)
    return 90;
  return 95;
}

export function yearsRemaining(person):number{
  return getLifeExpectancy(person) - person.age;
}

export function canRideOnARollercoaster(person):boolean{
  if(person.height >= 120)
    return true;
  return false;
}

export function canBuyBeer(person):boolean {
  return person.age >=18;
}

export function getSummary(person):string {

  let vegetarianOrNotSentence = (isVegetarian(person)? "is a vegetarian" : "likes meat");
  let deadOrAliveSentence = (yearsRemaining(person)>0? "has " + yearsRemaining(person) + " years to live" : "should be dead");

  return person.name + " " + vegetarianOrNotSentence + ", is " + person.height + "cm tall and " + deadOrAliveSentence;
  
}
