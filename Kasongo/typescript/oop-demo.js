var greet = function (name) {
    console.log("Hi " + name);
};
greet("Craig");
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.greet = function () {
            console.log("Hi " + _this.firstName);
        };
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
var craig = new Person("Craig", "Davies");
craig.fullName;
