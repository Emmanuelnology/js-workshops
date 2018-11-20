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
        // greet is a method and NOT a funciton because it sits within a class.
        this.greet = function () {
            console.log("Hi " + _this.firstName + "\n");
        };
        var email2 = new Email(email);
        email2.address = email;
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
var Email = /** @class */ (function () {
    function Email(address) {
        this.address = address;
        this.validateEmail = function (address) {
            return (address.search('@') != -1);
        };
        console.log(this.address + " is " + (this.validateEmail(this.address) ? "valid" : "invalid"));
    }
    return Email;
}());
var nologist = /** @class */ (function (_super) {
    __extends(nologist, _super);
    function nologist(firstName, lastName, email, likestrains) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.likestrains = likestrains;
        _this.greet = function () {
            console.log("Howdy there nologist!");
        };
        return _this;
    }
    return nologist;
}(Person));
var trainer = /** @class */ (function (_super) {
    __extends(trainer, _super);
    function trainer(firstName, lastName, email) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.greet = function () {
            console.log("Howdy there trainer!");
        };
        return _this;
    }
    return trainer;
}(Person));
var george = new Person("George", "Webster", "gcwebster@hotmail.co.uk");
var george2 = new nologist("George", "Webster", "george.webster@nology.io", true);
var craig = new trainer("Craig", "Livings", "craig@nology.io");
var steven = new Person("Steven", "Golden", "s.goldengoldens.com");
george.greet();
george2.greet();
steven.greet();
craig.greet();
console.log(george.email);
console.log(george.fullName);
