"use strict";
// import { House } from "./ts9-solution";
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
kidsRoom=house.room[2];
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
        this.room = [];
        this.cars = [];
        this.addRoom = function (room) {
            _this.room.push(room);
        };
        this.removeRoom = function (room) {
            var roomNumber = _this.room.indexOf(room);
            _this.room.splice();
        };
        this.addCar = function (cars) {
            _this.cars.push(cars);
        };
        this.removeCar = function (cars) {
            var carNumber = _this.cars.indexOf(cars);
            _this.cars.splice(carNumber);
        };
    }
    return House;
}());
exports.House = House;
;
var Room = /** @class */ (function () {
    function Room(name) {
    }
    ;
    return Room;
}());
exports.Room = Room;
var Bedroom = /** @class */ (function (_super) {
    __extends(Bedroom, _super);
    function Bedroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bedroom;
}(Room));
'Single bed', 'Wardrobe', 'Drawers';
var LargeRoom = /** @class */ (function (_super) {
    __extends(LargeRoom, _super);
    function LargeRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LargeRoom;
}(Room));
'King sized bed', 'Wardrobe', 'Drawers';
var Bathroom = /** @class */ (function (_super) {
    __extends(Bathroom, _super);
    function Bathroom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bathroom;
}(Room));
