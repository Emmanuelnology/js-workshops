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
    public rooms:Room[] = [];
    public cars:Car[] = [];

    public addRoom = (roomName:Room) => {
        this.rooms.push(roomName);
    }



    public removeRoom = (name:string) => {
        // this.rooms.pop(name);
    }

    public addCar = () => {
        
    }

    public removeCar = () => {
        
    }
}

export class Room {

    
    name:string = this.name;
    contents:string = this.contents;
}

export class Bedroom extends Room {

}

export class LargeRoom extends Room {
    
}

export class Bathroom extends Room {

}

export class Car extends House {

}