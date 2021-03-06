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
        var _this = this;
        this.rooms = [];
        this.cars = [];
        this.addRoom = function (room) { return _this.rooms.push(room); };
        this.removeRoom = function (room) {
            var roomID = _this.rooms.indexOf(room);
            _this.rooms.splice(roomID, 1);
        };
        this.addCar = function (car) { return _this.cars.push(car); };
        this.removeCar = function (car) {
            var carID = _this.cars.indexOf(car);
            _this.rooms.splice(carID, 1);
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
exports.Room = Room;
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
<<<<<<< HEAD
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(length, registration) {
        var _this = _super.call(this, length) || this;
        _this.length = length;
        _this.registration = registration;
        return _this;
=======
var Car = /** @class */ (function () {
    function Car(registration) {
        var _this = this;
        this.registration = registration;
        this.isLocked = function () {
            return _this.lock;
        };
        this.toggleLock = function () {
            _this.lock = !_this.lock;
        };
>>>>>>> c855ebb415d92ec8c0757f06b8f140efd0370d5d
    }
    return Car;
}(Room));
exports.Car = Car;
<<<<<<< HEAD
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
house.addRoom();
=======
var house = new House();
var bathRoom = new Bathroom('Toilet');
house.addRoom(bathRoom);
console.log(house.cars);
>>>>>>> c855ebb415d92ec8c0757f06b8f140efd0370d5d
