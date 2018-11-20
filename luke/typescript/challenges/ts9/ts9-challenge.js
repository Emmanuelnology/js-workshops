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
kidsRoom=house.rooms[2];
house.removeRoom(kidsRoom);
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
house.removeCar('WD13WEZ');
house.addCar(new Car('AA66 AEZ')); //Registration is AA66 AEZ
house.cars[0].toggleLock(); //toggles lock for car on and off
console.log(house.cars);

*/
var House = /** @class */ (function () {
    function House(roomName, roomNumber) {
        var _this = this;
        this.roomName = roomName;
        this.roomNumber = roomNumber;
        this.rooms = [];
        this.cars = [];
        this.addRoom = function (rooms) {
            _this.rooms.push();
        };
        this.roomName = roomName;
        this.roomNumber = roomNumber;
        this.addRoom = addRoom;
    }
    return House;
}());
exports.House = House;
;
var Car = /** @class */ (function () {
    function Car(reg) {
        this.reg = reg;
        this.reg = reg;
    }
    return Car;
}());
exports.Car = Car;
var Bedroom = /** @class */ (function (_super) {
    __extends(Bedroom, _super);
    function Bedroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bedroom;
}(House));
exports.Bedroom = Bedroom;
var LargeRoom = /** @class */ (function (_super) {
    __extends(LargeRoom, _super);
    function LargeRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LargeRoom;
}(House));
exports.LargeRoom = LargeRoom;
var Bathroom = /** @class */ (function (_super) {
    __extends(Bathroom, _super);
    function Bathroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bathroom;
}(House));
exports.Bathroom = Bathroom;
var car1 = new Car("WD12 YES");
var room1 = new LargeRoom("master", 1);
