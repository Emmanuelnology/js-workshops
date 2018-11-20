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
        this.addRoom = (room) => this.rooms.push(room);
        this.removeRoom = (roomName) => {
            let roomID = this.rooms.findIndex((room) => room.name == roomName);
            this.rooms.splice(roomID, 1);
        };
        this.addCar = (car) => this.cars.push(car);
        this.removeCar = (registration) => {
            let carID = this.cars.findIndex((car) => car.registration == registration);
            this.cars.splice(carID, 1);
        };
    }
}
export class Car {
    constructor(registration) {
        this.registration = registration;
        this.locked = true;
    }
    isLocked() {
        return this.locked;
    }
    toggleLock() {
        this.locked = !this.locked;
    }
}
export class Room {
    constructor(name) {
        this.name = name;
    }
}
export class Bathroom extends Room {
    constructor() {
        super(...arguments);
        this.contents = ['Toilet', 'Sink'];
    }
}
export class Bedroom extends Room {
    constructor() {
        super(...arguments);
        this.contents = ['Single Bed', 'Wardrobe', 'Drawers'];
    }
}
export class LargeRoom extends Bedroom {
    constructor() {
        super(...arguments);
        this.contents = ['King size bed', 'Wardrobe', 'Drawers'];
    }
}
