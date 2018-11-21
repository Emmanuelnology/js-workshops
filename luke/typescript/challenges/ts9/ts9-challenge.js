"use strict";
exports.__esModule = true;
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
var House = /** @class */ (function () {
    function House() {
        var _this = this;
        this.rooms = [];
        this.cars = [];
        this.addRoom = function (rooms) {
            _this.rooms.push(rooms);
        };
        this.removeRoom = function (rooms) {
            var roomNumber = _this.rooms.indexOf(rooms);
            _this.rooms.splice(roomNumber);
        };
    }
    return House;
}());
exports.House = House;
;
