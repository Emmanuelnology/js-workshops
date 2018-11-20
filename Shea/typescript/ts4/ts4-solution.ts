import {Person} from "./ts4-data";

export function isVegetarian(person:Person) {
  return person.isVegetarian;
}

export function canFitOnANameCard(person:Person) {
  return person.name.length <= 6;
}

export function getLifeExpectancy(person:Person) {
  return person.isVegetarian ? 90:95;
}

export function yearsRemaining(person:Person) {
  return getLifeExpectancy(person) - person.age;
}

export function canRideOnARollercoaster(person:Person) {
  return person.height >= 120;
}

export function canBuyBeer(person:Person) {
  return person.age >= 18;
}

export function getSummary(person:Person) {
  let vegetarianMessage = person.isVegetarian ? "is a vegetarian" : "likes meat"; 
  let deadMessage = (yearsRemaining(person) < 0) ? "should be dead" : "has " + yearsRemaining(person) + " years to live";
  return person.name + " " + vegetarianMessage + ", is " + person.height + "cm tall and " + deadMessage;
}


