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

import {Person} from "./ts4-data";

export const isVegetarian = (person:Person):boolean => person.isVegetarian;

export const canFitOnANameCard = (person:Person):boolean => person.name.length <= 6;

export const getLifeExpectancy = (person:Person):number => {
  if (isVegetarian(person)) {
    return 90;
  }
  return 95;
}

export const yearsRemaining = (person:Person):number => getLifeExpectancy(person) - person.age;

export const canRideOnARollercoaster = (person:Person):boolean => person.height >= 120;

export const canBuyBeer = (person:Person):boolean => person.age >= 18;

export const getSummary = (person:Person):string => {
  let vegSummary:string = "";
  if (isVegetarian(person)) {
    vegSummary = " is a vegetarian";
  }
  else {
    vegSummary = " likes meat";
  }
  let deadSummary:string = "";
  if (yearsRemaining(person) < 0) {
    deadSummary = "should be dead"
  }
  else {
    deadSummary = "has " + yearsRemaining(person) + " years to live"
  }
  return person.name + vegSummary + ", is " + person.height + "cm tall and " + deadSummary;
}
