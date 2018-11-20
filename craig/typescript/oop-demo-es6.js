var Person = /** @class */ (function () {
    function Person(firstName, lastName, emailObject) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailObject = emailObject;
        this.greet = function () {
            console.log("Greetings " + _this.firstName);
        };
        console.log(this.email + ": " + (emailObject.validate() ? "Valid" : "Invalid"));
    }
    Object.defineProperty(Person.prototype, "email", {
        get: function () {
            return this.emailObject.address;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Email = /** @class */ (function () {
    function Email(address) {
        this.address = address;
    }
    Email.prototype.validate = function () {
        return (this.address.indexOf("@") != -1);
    };
    return Email;
}());
var craig = new Person("Craig", "Livings", new Email("craig@nology.io"));
var jen = new Person("Jenna", "Livings", new Email("jen at craigisawesome.io"));
