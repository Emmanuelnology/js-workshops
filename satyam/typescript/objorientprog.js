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
            console.log("Hola " + _this.firstName);
        };
        console.log(this.email + ": " + (this.validateEmailAddress() ? "Legit Emailz" : "UnLegit Emailz"));
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.validateEmailAddress = function () {
        return (this.email.indexOf("@") != -1);
    };
    return Person;
}());
// class Email {
//     constructor (public address) {}
//     public validateEmailAddress() {
//         return (this.address.indexOf("@")!= -1);
//     }
// }
var Nologist = /** @class */ (function (_super) {
    __extends(Nologist, _super);
    function Nologist(firstName, lastName, email, likesTrains) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.likesTrains = likesTrains;
        _this.greet = function () {
            console.log("Hola " + _this.fullName + " keep on nologin'");
        };
        return _this;
    }
    return Nologist;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(firstName, lastName, email, likesTrains) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.likesTrains = likesTrains;
        _this.greet = function () {
            console.log("Sup " + _this.fullName + " keep on knowledgein'");
        };
        return _this;
    }
    return Trainer;
}(Person));
var fakeNews = new Person("Fake", "News", "trump.at.massivenob.head");
var saty = new Nologist("Saty", "G", "satyg@nology.io", true);
var Craig = new Trainer("Craig", "L", "craig@nology.io", false);
// saty.greet();
console.log(saty.greet);
console.log(Craig.greet);
saty.greet();
Craig.greet();
