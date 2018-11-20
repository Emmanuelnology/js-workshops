"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
house.removeRoom('Guest');
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
house.removeCar('WD13WEZ');
house.addCar(new Car('AA66 AEZ')); //Registration is AA66 AEZ
house.cars[0].toggleLock(); //toggles lock for car on and off
console.log(house.cars);

*/
var House = /** @class */ (function () {
    function House() {
    }
    ;
    House.prototype.addCar = function (registrationPlate) {
        var car = new Car(registrationPlate);
        this.cars.push(car);
    };
    House.prototype.removeCar = function (registrationPlateToCheck) {
        for (index in this.cars) {
            if (this.cars[index].registrationPlate == registrationPlateToCheck) {
                this.cars[index].pop();
            }
        }
    };
    House.prototype.addRoom = function (roomToBeAdded) {
        var room = new Room(roomToBeAdded);
        this.rooms.push(room);
    };
    House.prototype.removeRoom = function () {
    };
    return House;
}());
var Room = /** @class */ (function () {
    function Room(name) {
        this.name = name;
    }
    return Room;
}());
var Bedroom = /** @class */ (function (_super) {
    __extends(Bedroom, _super);
    function Bedroom(name) {
        return _super.call(this, name) || this;
    }
    return Bedroom;
}(Room));
var Bathroom = /** @class */ (function (_super) {
    __extends(Bathroom, _super);
    function Bathroom(name) {
        return _super.call(this, name) || this;
    }
    return Bathroom;
}(Room));
var Car = /** @class */ (function () {
    function Car(registrationPlate) {
        this.registrationPlate = registrationPlate;
    }
    return Car;
}());
var house = new House();
house.addRoom(new Bedroom('Guest'));
