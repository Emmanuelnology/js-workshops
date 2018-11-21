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
    addRoom = (room:Room) =>  this.rooms.push(room); 
    removeRoom = (room:Room) => {
        let roomID = this.rooms.indexOf(room);
        this.rooms.splice(roomID, 1);
    }
    
    addCar = (car:Car) => this.cars.push(car); 
    removeCar = (car:Car) => {
        let carID = this.cars.indexOf(car);
        this.rooms.splice(carID, 1);
    }
}

export class Room {
    public contents:string[];
    constructor (public name:string){
    }      
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

export class Car {
    public car:any
    constructor(public registration:any, public lock:boolean, public length:number) {
    }
    public isLocked = () => {
        return this.lock;
    } 
    public toggleLock = () => {
        this.lock = !this.lock;
    }
}


let house = new House();
let bathRoom = new Bathroom('Toilet')
house.addRoom(bathRoom);
console.log(house.cars);

