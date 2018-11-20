/* TS9

Object inheritance

Read the test file to understand the expected behaviour

You are not allowed to use if statements or ternery operators.

Example usage:

let house = new House();
house.addRoom(new Bedroom('Guest')); // Name is guest room
house.addRoom(new Bathroom('Main bathroom')); // Name is Main Bathroom
house.addRoom(new LargeRoom('Master')); // Name is Master
kidsRoom=house.rooms[2];
house.removeRoom(kidsRoom); 
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
let carToRemove=house.cars[0];
house.removeCar(carToRemove);
house.addCar(new Car('AA66 AEZ')); //Registration is AA66 AEZ
house.cars[0].toggleLock(); //toggles lock for car on and off
console.log(house.cars);

*/


export class House {
  public rooms:Room[] = [];
  public cars:Car[] = [];
  public addRoom = (roomToAdd:Room) => {
    this.rooms.push(roomToAdd);
  }
  public removeRoom = (roomToRemove) => {
    let location:number = this.rooms.indexOf(roomToRemove);
    this.rooms.splice(location,1);
  }
  public addCar = (carToAdd:Car) => {
    this.cars.push(carToAdd);
  }
  public removeCar = (carToRemove) => {
    let location:number = this.cars.indexOf(carToRemove);
    this.cars.splice(location,1);
  }
}

class Room {
  public contents:string[];
  constructor(public name:string) {}
}

export class Bedroom extends Room {
  contents = ['Single bed', 'Wardrobe', 'Drawers'];
}

export class Bathroom extends Room {  
  contents = ['Toilet', 'Sink'];
}

export class LargeRoom extends Room {
  contents = ['King size bed', 'Wardrobe', 'Drawers'];
}

export class Car {
  constructor(public registration:string) {}
  public isLocked = ():boolean => {
    return this.locked;
  }
  public locked:boolean = true;
  public toggleLock = () => {
    this.locked =! this.locked;
  }
}
