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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.greet = function () {
            console.log('Hi ' + _this.fullName);
        };
        this.validateEmail = function (email) {
            return (email.indexOf('@') != -1) ? "valid email" : "invalid email";
        };
        console.log(this.validateEmail(this.email));
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var shea = new Person("Shea", "Murphy", "shea.murphy@nology.io");
var Nologist = /** @class */ (function (_super) {
    __extends(Nologist, _super);
    function Nologist(firstName, lastName, email, likesTrains) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.likesTrains = likesTrains;
        _this.greet = function () {
            console.log('Hi ' + _this.fullName + " you nologist you!!!");
        };
        return _this;
    }
    return Nologist;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(firstName, lastName, email, likesTrains, likesTrainsing) {
        var _this = _super.call(this, firstName, lastName, email, likesTrains) || this;
        _this.likesTrainsing = likesTrainsing;
        _this.greet = function () {
            console.log('Hi ' + _this.fullName + " keep trainsing yo' !!!");
        };
        return _this;
    }
    return Trainer;
}(Nologist));
var peter = new Nologist("Peter", "Anstey", "peter@peter.peter", true);
var craig = new Trainer("Craig", "Livings", "craig@craig.craig", true, true);
shea.greet();
peter.greet();
craig.greet();
