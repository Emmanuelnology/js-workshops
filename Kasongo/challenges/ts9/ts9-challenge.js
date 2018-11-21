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
var _this = this;
exports.__esModule = true;
var ts9_solution_1 = require("./ts9-solution");
exports.House = ts9_solution_1.House;
var Room = /** @class */ (function () {
    function Room(name) {
        this.name = name;
    }
    return Room;
}());
exports.Room = Room;
var Bedroom = /** @class */ (function (_super) {
    __extends(Bedroom, _super);
    function Bedroom(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.contents = ['Single bed', 'Wardrobe', 'Drawers'];
        _this.name = name;
        return _this;
    }
    return Bedroom;
}(Room));
exports.Bedroom = Bedroom;
var Bathroom = /** @class */ (function (_super) {
    __extends(Bathroom, _super);
    function Bathroom(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.contents = ['Toilet', 'Sink'];
        _this.name = name;
        return _this;
    }
    return Bathroom;
}(Room));
exports.Bathroom = Bathroom;
var LargeRoom = /** @class */ (function (_super) {
    __extends(LargeRoom, _super);
    function LargeRoom(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.contents = ['King size bed', 'Wardrobe', 'Drawers'];
        _this.name = name;
        return _this;
    }
    return LargeRoom;
}(Room));
exports.LargeRoom = LargeRoom;
var Car = /** @class */ (function () {
    function Car(length, registration) {
        this.length = length;
        this.registration = registration;
    }
    return Car;
}());
exports.Car = Car;
var House = /** @class */ (function () {
    function House() {
        this.rooms = [];
        this.cars = [];
    }
    return House;
}());
exports.House = House;
for (room in house) {
}
addRoom = function (room) { return _this.rooms.push(room); };
removeRoom = function (room) { return _this.rooms.pop(); };
addCar = function (length, registration) { return _this.cars.push(car); };
var house = new ts9_solution_1.House();
