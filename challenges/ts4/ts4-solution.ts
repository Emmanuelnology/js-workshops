import {Person} from "./ts4-data";

export let isVegetarian = (person:Person) => person.isVegetarian;

export let canFitOnANameCard = (person:Person) => person.name.length <= 6;

export let getLifeExpectancy = (person:Person) => person.isVegetarian ? 90:95;

export let yearsRemaining = (person:Person) => getLifeExpectancy(person) - person.age;

export let canRideOnARollercoaster = (person:Person) => person.height >= 120;

export let canBuyBeer = (person:Person) => person.age >= 18;

export let getSummary = (person:Person) => {
  let vegetarianMessage = person.isVegetarian ? "is a vegetarian" : "likes meat"; 
  let deadMessage = (yearsRemaining(person) < 0) ? "should be dead" : "has " + yearsRemaining(person) + " years to live";
  return person.name + " " + vegetarianMessage + ", is " + person.height + "cm tall and " + deadMessage;
}


