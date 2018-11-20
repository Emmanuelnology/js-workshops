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
    constructor() {
        this.rooms = [];
        this.cars = [];
        this.addRoom = (room) => {
            this.rooms.push(room);
        };
        this.removeRoom = (room) => {
        };
        this.addCar = (car) => {
            this.rooms.push(car);
        };
        this.removeCar = (car) => {
        };
    }
}
export class Room {
    constructor(name) {
        this.name = name;
    }
}
export class Bedroom extends Room {
}
export class Bathroom extends Room {
}
export class LargeRoom extends Room {
}
export class Car {
    constructor(registration) {
        this.registration = registration;
        this.isLocked = () => {
        };
        this.toggleLock = () => {
        };
    }
}
