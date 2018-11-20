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
var george = new Person("George", "Webster", "gcwebster@hotmail.co.uk");
var steven = new Person("Steven", "Golden", "s.goldengoldens.com");
george.greet();
steven.greet();
console.log(george.email);
