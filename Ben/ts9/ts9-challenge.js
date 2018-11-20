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
kidsRoom=house.rooms[2];
house.removeRoom(kidsRoom);
house.addCar(new Car('WD13 WEZ')); //Registration is WS13 WEZ
let carToRemove=house.cars[0];
house.removeCar(carToRemove);
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
        this.addRoom = function (room) {
            _this.rooms.push(room);
        };
        this.removeRoom = function (room) {
            var location = _this.rooms.indexOf(room);
            _this.rooms.splice(location, 1);
        };
        this.addCar = function (car) {
            _this.cars.push(car);
        };
        this.removeCar = function (car) {
            var location = _this.cars.indexOf(car);
            _this.cars.splice(location, 1);
        };
    }
    return House;
}());
exports.House = House;
var Room = /** @class */ (function () {
    function Room(name) {
        this.name = name;
    }
    return Room;
}());
var Bedroom = /** @class */ (function (_super) {
    __extends(Bedroom, _super);
    function Bedroom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contents = ['Single bed', 'Wardrobe', 'Drawers'];
        return _this;
    }
    return Bedroom;
}(Room));
exports.Bedroom = Bedroom;
var Bathroom = /** @class */ (function (_super) {
    __extends(Bathroom, _super);
    function Bathroom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contents = ['Toilet', 'Sink'];
        return _this;
    }
    return Bathroom;
}(Room));
exports.Bathroom = Bathroom;
var LargeRoom = /** @class */ (function (_super) {
    __extends(LargeRoom, _super);
    function LargeRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contents = ['King size bed', 'Wardrobe', 'Drawers'];
        return _this;
    }
    return LargeRoom;
}(Room));
exports.LargeRoom = LargeRoom;
var Car = /** @class */ (function () {
    function Car(registration) {
        var _this = this;
        this.registration = registration;
        this.locked = true;
        this.isLocked = function () {
            return _this.locked;
        };
        this.toggleLock = function () {
            if (_this.locked) {
                _this.locked = false;
            }
            else
                _this.locked = true;
        };
    }
    return Car;
}());
exports.Car = Car;
