"use strict";
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
var House = /** @class */ (function () {
    function House() {
        var _this = this;
        this.rooms = [];
        this.cars = [];
        this.addRoom = function (name) {
            _this.rooms.push(name);
        };
        // public removeRoom = (name:string) => {
        //     this.rooms.pop(name);
        // }
        this.addCar = function () {
        };
        this.removeCar = function () {
        };
    }
    return House;
}());
exports.House = House;
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Room;
}(House));
exports.Room = Room;
var Bedroom = /** @class */ (function (_super) {
    __extends(Bedroom, _super);
    function Bedroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bedroom;
}(Room));
exports.Bedroom = Bedroom;
var LargeRoom = /** @class */ (function (_super) {
    __extends(LargeRoom, _super);
    function LargeRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LargeRoom;
}(Room));
exports.LargeRoom = LargeRoom;
var Bathroom = /** @class */ (function (_super) {
    __extends(Bathroom, _super);
    function Bathroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bathroom;
}(Room));
exports.Bathroom = Bathroom;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(House));
exports.Car = Car;
