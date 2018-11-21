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

    rooms:Room[] = []

    public addRoom = (roomName:Room) => {
       this.rooms.push(roomName);
       console.log(this.rooms);
    }

}

export class Room extends House {
    public name:string;
    public contents:string;

}

export class Car {

}

export class Bedroom extends Room {


}

export class LargeRoom extends Room {


}

export class Bathroom extends Room {


}

let house = new House();
house.addRoom(new Bedroom('Guest'));
