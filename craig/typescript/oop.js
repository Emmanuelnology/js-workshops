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
    function Person(name, surname, email) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.greet = function () {
        console.log("Hi " + this.name + "!");
    };
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(name, surname, email) {
        this.name = name;
        this.surname = surname;
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    Person2.prototype.greet = function () {
        console.log("Hi " + this.email + "!");
    };
    Person2.prototype.validateEmail = function (email) {
        return email.includes("@");
    };
    return Person2;
}());
var Person3 = /** @class */ (function () {
    function Person3(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.email = new Email(email).get();
    }
    Person3.prototype.greet = function () {
        console.log("Hi " + this.email + "!");
    };
    return Person3;
}());
var Email = /** @class */ (function () {
    function Email(email) {
        if (this.validate(email)) {
            this.address = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    Email.prototype.validate = function (email) {
        return email.includes("@");
    };
    Email.prototype.get = function () {
        return this.address;
    };
    return Email;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, surname, email, subjects) {
        var _this = _super.call(this, name, surname, email) || this;
        _this.name = name;
        _this.surname = surname;
        _this.email = email;
        _this.subjects = subjects;
        return _this;
    }
    Teacher.prototype.teach = function () {
        for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
            var subject = _a[_i];
            console.log("My name is " + this.name + " and I teach " + subject);
        }
    };
    return Teacher;
}(Person3));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.learn = function () {
        console.log("My name is " + this.name + " and I learn Spanish");
    };
    return Student;
}(Person3));
var HeadTeacher = /** @class */ (function (_super) {
    __extends(HeadTeacher, _super);
    function HeadTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeadTeacher.prototype.teach = function () {
        console.log("My name is " + this.name + " and I am standing in");
    };
    return HeadTeacher;
}(Teacher));
var me = new HeadTeacher("Craig", "Livings", "craig@nology.io", ["Spanish", "French"]);
me.greet();
me.teach();
