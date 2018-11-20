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
    function Person(firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.greet = function () {
            console.log("Hi " + _this.firstName);
        };
    }
    return Person;
}());
var Email = /** @class */ (function () {
    function Email(email) {
        var _this = this;
        this.email = email;
        this.testEmail = function () {
            return (_this.email.indexOf('@') == -1);
        };
        this.testing = function () {
            return Email.constructor;
        };
        console.log(this.email + ": " + (this.testEmail() ? "Valid" : "Invalid"));
    }
    return Email;
}());
var Nologist = /** @class */ (function (_super) {
    __extends(Nologist, _super);
    function Nologist(firstName, lastName, emailObject, valid) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.greet = function () {
            console.log('happy');
        };
        return _this;
    }
    return Nologist;
}(Person));
var craig = new Nologist("Craig", "Jones", "google@gmai.com", true);
craig.greet;
