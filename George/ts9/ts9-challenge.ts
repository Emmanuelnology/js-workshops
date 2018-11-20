import { House } from "./ts9-solution";

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


class House {
    rooms: Room[];
    cars: Car[];;
    list

    addCar(registrationPlate:string) {
        let car = new Car(registrationPlate);
        this.cars.push(car);
    }

    removeCar(registrationPlateToCheck:string) {
        for(index in this.cars) {
            if(this.cars[index].registrationPlate == registrationPlateToCheck){
                this.cars[index].pop();
            }
        }
    }

    addRoom(roomToBeAdded:Room) {
        let room = new Room(roomToBeAdded);
        this.rooms.push(room);

    }

    removeRoom() {

    }
    
}

class Room {
    constructor(public name:string){

    }
}

class Bedroom extends Room{
    constructor(name:string){
        super(name);
    }
}

class Bathroom extends Room{
    constructor(name:string){
        super(name);
    }
}

class Car {
    constructor(public registrationPlate:string){

    }
}




let house = new House();
house.addRoom(new Bedroom('Guest'));