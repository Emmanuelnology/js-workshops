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
export interface Person {
  name:string,
  age:number,
  height:number,
  isVegetarian:boolean
}

export let people:Person[] = [
{
  name:"Bob",
  age: 12,
  height: 110,
  isVegetarian: true
},
{
  name:"Harigon",
  age: 63,
  height: 150,
  isVegetarian: true
},
{
  name:"Thomas",
  age: 18,
  height: 121,
  isVegetarian: false
},
{
  name:"Sarah",
  age: 17,
  height: 119,
  isVegetarian: false
},
{
  name:"Lucy",
  age: 78,
  height: 140,
  isVegetarian: true
},
{
  name:"Dave",
  age: 93,
  height: 210,
  isVegetarian: false
},
{
  name:"Doris",
  age: 94,
  height: 80,
  isVegetarian: true
},
];

export let isVegetarian = (people) => {
  return people.isVegetarian
 // change this line and add others if needed
} 

export let canFitOnANameCard = (people) => {
return people.name.length<=6
  // change this line and add others if needed
}

export let getLifeExpectancy = (people) => {
  return isVegetarian(people) ? 90:95;
 // change this line and add others if needed
}

export let yearsRemaining = (people) => {
return getLifeExpectancy(people) - people.age;
}

export let canRideOnARollercoaster=(people)=>{
 return people.height >=120// change this line and add others if needed
}

export let canBuyBeer=(people)=>{
  return people.age >= 18
}


export let getSummary=(people)=>{
  let vegetarianMesage = isVegetarian(people) === true ? " is a vegetarian":" likes meat";
  let deadMessage = yearsRemaining(people) > 0 ? "has " + yearsRemaining(people) + " years to live":"should be dead" 
  return people.name +  vegetarianMesage+ ", is " + people.height + "cm tall and " + deadMessage;
 // change this line and add others if needed
}
