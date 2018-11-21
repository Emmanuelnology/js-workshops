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

import { Suite } from '../testRunner';
import { House, Car, Bedroom, LargeRoom, Bathroom } from "./ts9-solution";

export class Room {
    public contents:string[];
    constructor(public name:string[]){    
}

export class Bedroom extends Room {
    public contents:string[] = ['Single bed', 'Wardrobe', 'Drawers'];   
}

export class Bathroom extends Room {
    public contents:string[] = ['Toilet', 'Sink'];
}

export class LargeRoom extends Room {
    public contents:string[] = ['King size bed', 'Wardrobe', 'Drawers'];
}

export class Car extends Room {
    public contents:string[];
    constructor(length:number, registration:any) {
        super(length)
        this.length=length;
        this.registration=registration;
    }      
}

export class House {
    rooms:Room[] = [];
    cars:Car[] = [];
    for room in house {

    }
    addRoom = (room:Room) =>  this.rooms.push(room);

    removeRoom = (room:Room) => this.rooms.pop();
    
    addCar = (length, registration) => this.cars.push(car);
}

let house = new House();
house.addRoom();

