// import { House } from "./ts9-solution";

/* TS9

Object inheritance

Read the test file to understand the expected behaviour

You are not allowed to use if statements or ternery operators.

Example usage:

let house = new House();
house.addRoom(new Bedroom('Guest')); // Name is guest room
house.addRoom(new Bathroom('Main bathroom')); // Name is Main Bathroom
house.addRoom(new LargeRoom('Master')); // Name is Master
kidsRoom=house.room[2];
house.removeRoom(kidsRoom); 
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
house.removeCar('WD13WEZ');
house.addCar(new Car('AA66 AEZ')); //Registration is AA66 AEZ
house.cars[0].toggleLock(); //toggles lock for car on and off
console.log(house.cars);

*/

  export class House {
  room: Room[] = []
  cars: Car[] = []

  addRoom = (room:Room) => {
  this.room.push(room);
  }

  removeRoom = (room:Room) => {
  let  roomNumber = this.room.indexOf(room);
    this.room.splice() 
  }

  addCar = (cars:Car) => {
    this.cars.push(cars);
    }
  
    removeCar = (cars:Car) => {
    let  carNumber = this.cars.indexOf(cars);
      this.cars.splice() 
    }

};

export class Room{
  contents:string;
  constructor(name:string){};
}

class Bedroom extends Room {
  contents['Single bed', 'Wardrobe', 'Drawers'];
}

class LargeRoom extends Room {
  contents['King sized bed', 'Wardrobe', 'Drawers']
}

class Bathroom extends Room{

}