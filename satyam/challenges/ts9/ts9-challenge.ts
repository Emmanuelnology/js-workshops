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
    cars:Car[] = []

    public addRoom = (roomName:Room) => {
       this.rooms.push(roomName);
    }

    public removeRoom = (roomName:Room) => {
        let roomID = this.rooms.indexOf(roomName);
        this.rooms.splice(roomID, 1)
    }

    public addCar = (carPlate:Car) => {
        this.cars.push(carPlate);
    }

    public removeCar = (carPlate:Car) => {
        let carID = this.cars.indexOf(carPlate);
        this.cars.splice(carID, 1)
    }
}

export class Car {
    private locked = true;

    constructor(public registration:string) {}

    public isLocked = () => {
        return this.locked;
    }

    public toggleLock = () => {
        return this.locked = !this.locked;
    }
}

export class Room {
    public contents: string[];
    constructor(public name:string) {}
}

export class Bedroom extends Room {
    public contents = ['Single bed', 'Wardrobe', 'Drawers'];
}

export class LargeRoom extends Room {
    public contents = ['King size bed', 'Wardrobe', 'Drawers'];
}

export class Bathroom extends Room {
    public contents = ['Toilet', 'Sink'];
}
