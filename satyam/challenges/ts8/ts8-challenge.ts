/*
The data file contains information for 7 people, along with an interface declaration for person

Create a class classed Person that take a person object and has the following functions:

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

import {Person as PersonData, people} from "./ts8-data";

export class Person {
  public isVegetarian:boolean;
  public name:string;
  public age:number;
  public height:number;
  constructor(data:PersonData) {
    this.name = data.name;
    this.age = data.age;
    this.height = data.height;
    this.isVegetarian = data.isVegetarian;
  }

  canFitOnANameCard = ():boolean => this.name.length <= 6;
  getLifeExpectancy = ():number => this.isVegetarian ? 90:95;
  yearsRemaining = ():number => this.getLifeExpectancy() - this.age;
  canRideOnARollercoaster = ():boolean => this.height >= 120;
  canBuyBeer = ():boolean => this.age >= 18;
  getSummary = ():string => {
    let vegetarianMessage = this.isVegetarian ? "is a vegetarian":"likes meat";
    let yearsToLiveMessage = (this.yearsRemaining() < 0) ? "should be dead": "has " + this.yearsRemaining() + " years to live";
    return this.name + " " + vegetarianMessage + ", is " + this.height + "cm tall and " + yearsToLiveMessage;
  }
}
