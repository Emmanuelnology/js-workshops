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
        this.emailObject = emailObject;
        this.greet = function () {
            console.log("Greetings " + _this.email);
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "email", {
        get: function () {
            return this.emailObject.address;
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
        this.address = address;
        console.log(address + ": " + (this.validate() ? "Valid" : "Invalid"));
    }
    Email.prototype.validate = function () {
        return (this.address.indexOf("@") != -1);
    };
    return Email;
}());
var Nologist = /** @class */ (function (_super) {
    __extends(Nologist, _super);
    function Nologist(firstName, lastName, emailObject) {
        var _this = _super.call(this, firstName, lastName, emailObject) || this;
        _this.greet = function () {
            console.log("Hi " + _this.firstName + ", have a good learning day! Make some sandwiches (I like trains)");
        };
        _this.learn = function () {
            console.log("I am learning stuff!");
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
            console.log("Hi " + _this.firstName + ", what'cha teaching today?");
        };
        return _this;
    }
    return Trainer;
}(Nologist));
var craig = new Person("Craig", "Livings", new Email("craig@nology.io"));
var jen = new Nologist("Jen", "Livings", new Email("jen@craigisawesome.com"));
var peter = new Trainer("Peter", "Anstey", new Email("peter@nology.io"));
craig.greet();
peter.greet();
