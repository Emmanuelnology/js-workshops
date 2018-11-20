import {Person as PersonData} from "./ts8-data";

export class Person {
  public isVegetarian:boolean;
  public name:string;
  public age:number;
  public height:number;
  constructor(data:PersonData){
    this.isVegetarian = data.isVegetarian;
    this.name = data.name;
    this.age = data.age;
    this.height = data.height;
  }

  public canFitOnANameCard = ():boolean => this.name.length <= 6;
  public getLifeExpectancy = ():number => this.isVegetarian ? 90:95;
  public yearsRemaining = ():number => this.getLifeExpectancy() - this.age;
  public canRideOnARollercoaster = ():boolean => this.height >= 120;
  public canBuyBeer = ():boolean => this.age >= 18;
  public getSummary = ():string => {
    let vegetarianMessage = this.isVegetarian ? "is a vegetarian" : "likes meat"; 
    let deadMessage = (this.yearsRemaining() < 0) ? "should be dead" : "has " + this.yearsRemaining() + " years to live";
    return this.name + " " + vegetarianMessage + ", is " + this.height + "cm tall and " + deadMessage;
  }
}






