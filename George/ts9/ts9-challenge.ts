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
    rooms: Room[] = [];
    cars: Car[] = [];

    addCar(carToBeAdded:Car) {
        this.cars.push(carToBeAdded);
    }

    removeCar(carToRemove:Car) {
        for(let index = 0; index < this.cars.length; index++) {
            if(this.cars[index] == carToRemove)
               this.cars.splice(index,1);
        }
    }

    addRoom(roomToBeAdded:Room) {
        this.rooms.push(roomToBeAdded);
    }

    removeRoom(roomToRemove:Room) {
        for(let index = 0; index < this.rooms.length; index++) {
            if(this.rooms[index] == roomToRemove)
                this.rooms.splice(index,1);
        }
    }    
}

export class Room {
    constructor(public name:string){

    }
}

export class Bedroom extends Room{
    contents =["Single bed", "Wardrobe", "Drawers"];
}

export class Bathroom extends Room{
    contents = ["Toilet", "Sink"]
}

export class LargeRoom extends Room{
    contents = ["King size bed", "Wardrobe", "Drawers"]
}

export class Car {
    locked = true;
    constructor(public registration:string){

    }

    isLocked(){
        return this.locked;
    }

    toggleLock(){
        this.locked = !this.locked;
    }
}