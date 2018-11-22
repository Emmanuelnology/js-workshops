/* TS9

Object inheritance

Read the test file to understand the expected behaviour

You are not allowed to use if statements or ternery operators.

Example usage:

let house = new House();
house.addRoom(new Bedroom('Guest')); // Name is guest room
house.addRoom(new Bathroom('Main bathroom')); // Name is Main Bathroom
house.addRoom(new LargeRoom('Master')); // Name is Master
house.removeRoom('Guest'); 
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
house.removeCar('WD13WEZ');
house.addCar(new Car('AA66 AEZ')); //Registration is AA66 AEZ
house.cars[0].toggleLock(); //toggles lock for car on and off
console.log(house.cars);

*/



export class House {
  rooms:Room[] = [];
  cars:Car[] = [];

  addRoom = (room:Room) => this.rooms.push(room);
  removeRoom = (room:Room) => {
    let roomID = this.rooms.indexOf(room);
    this.rooms.splice(roomID, 1);
  }

  addCar = (car:Car) => this.cars.push(car);
  removeCar = (car:Car) => {
    let carID = this.cars.indexOf(car);
    this.cars.splice(carID, 1);
  }

}

export class Car {
  private locked = true;
  
  constructor(public registration:string){}

  public isLocked() {
    return this.locked;
  }

  public toggleLock() {
    this.locked=!this.locked;
  }
}

export class Room {
  public contents:string[];
  constructor(public name:string){
  }
}

export class Bathroom  extends Room {
  public contents = ['Toilet', 'Sink'];
}

export class Bedroom  extends Room {
  public contents = ['Single bed', 'Wardrobe', 'Drawers'];
  // public hasKingSizeBed = false;
  // public numberOfWardrobes = 1;
  // public hasDrawers=true;
}

export class LargeRoom  extends Bedroom {
  public contents = ['King size bed', 'Wardrobe', 'Drawers'];
  // public hasKingSizeBed = true;
}

