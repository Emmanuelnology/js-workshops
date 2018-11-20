import { Room } from "./ts9-solution";

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
house.removeCar('WD13WEZ');
house.addCar(new Car('AA66 AEZ')); //Registration is AA66 AEZ
house.cars[0].toggleLock(); //toggles lock for car on and off
console.log(house.cars);

*/

export class House {
  rooms: Room [] = []
  cars: Car [] = []

  addRoom = (rooms:Room) => {
  this.rooms.push();
  }
  removeRoom = (rooms:Room) => {
    this.rooms.shift();
  }

  constructor(
    public roomName:string,
    public roomNumber:number,

  )

  {
  this.roomName = roomName;
  this.roomNumber = roomNumber;
  this.addRoom = addRoom;
  }
};

export class Car {

  constructor(
    public reg:string,
  )
  {

    this.reg = reg
  }
}

export class Bedroom extends House{

}

export class LargeRoom extends House{

}

export class Bathroom extends House{

}

let car1 = new Car("WD12 YES")
let room1 = new LargeRoom ("master", 1)