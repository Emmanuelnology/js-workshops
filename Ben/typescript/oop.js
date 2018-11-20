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
    function Person(firstName, lastName, emailObject) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailObject = emailObject;
        this.greet = function () {
            console.log("Hello " + _this.fullName);
        };
    }
    Object.defineProperty(Person.prototype, "email", {
        get: function () {
            return this.emailObject.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "eyeColor", {
        set: function (color) {
            this.eyeColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Email = /** @class */ (function () {
    function Email(address) {
        var _this = this;
        this.address = address;
        this.validEmail = function () {
            return (_this.address.indexOf("@") != -1);
        };
        console.log(this.validEmail() ? this.address + " is a valid email address" : this.address + " is not a valid email address");
    }
    return Email;
}());
var Nologist = /** @class */ (function (_super) {
    __extends(Nologist, _super);
    function Nologist(firstName, lastName, emailObject) {
        var _this = _super.call(this, firstName, lastName, emailObject) || this;
        _this.greet = function () {
            console.log("Hi " + _this.firstName);
        };
        _this.learn = function () {
            console.log("I am learning");
        };
        return _this;
    }
    return Nologist;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.greet = function () {
            console.log("Good day Mr " + _this.lastName);
        };
        return _this;
    }
    return Trainer;
}(Nologist));
var steve = new Person("Steve", "Steveson", new Email("steve.steveson"));
var ben = new Nologist("Ben", "Tomaney", new Email("Ben.Tomaney@nology.io"));
var craig = new Trainer("Craig", "Livings", new Email("craig@nology.io"));
ben.likesTrains = true;
craig.likesTrains = false;
steve.greet();
ben.greet();
craig.greet();
