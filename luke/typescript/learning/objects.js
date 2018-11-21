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
var person = /** @class */ (function () {
    function person(firstName, lastName, address) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.greet = function () {
            console.log("Greetings " + _this.fullName);
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.eyecolor = "blue";
    }
    Object.defineProperty(person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
var email = /** @class */ (function () {
    function email(address) {
        this.address = address;
        console.log(this.address + ": " + (this.validateEmail() ? "valid" : "is not valid"));
    }
    email.prototype.validateEmail = function () {
        return (this.address.indexOf('@') != -1);
    };
    return email;
}());
var nology = /** @class */ (function (_super) {
    __extends(nology, _super);
    function nology() {
        // constructor(firstName:string, lastName:string, emailObject:email, public likesTrains:boolean)
        // super(firstName, lastName, emailObject)
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.learn = function () {
            console.log("im learning stuff");
        };
        _this.greet = function () {
            console.log("hello " + _this.fullName + " have a good day of learning");
        };
        return _this;
    }
    return nology;
}(person));
var Luke = new person("luke", "delaney", new email("delaney.luke95@gmail.com"));
var craig = new person("craig", "livings", new email("craig@nology.io"));
var peter = new nology("peter", "livings", new email("peter at nology.io"));
peter.greet();
craig.greet();
// let Craig = new person();
// Craig.firstName = "Craigy";
// Luke.greet(); //prints Hi luke
// Craig.greet(); // prints hi craigy
// console.log(Craig.firstName); // prints craigy
