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
  public addRoom = (room) => {
    this.rooms.push(room);
  }
  public removeRoom = (room) => {
    let location:number = this.rooms.indexOf(room);
    this.rooms.splice(location,1);
  }
  public addCar = (car) => {
    this.cars.push(car);
  }
  public removeCar = (car) => {
    let location:number = this.cars.indexOf(car);
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
  public locked:boolean = true;
  public isLocked = ():boolean => {
    return this.locked;
  }
  public toggleLock = () => {
    this.locked =! this.locked;
  }
}
