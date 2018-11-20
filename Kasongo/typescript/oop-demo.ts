let greet = (name) => {
    console.log("Hi " + name);
}

greet("Craig");

class Person {
    constructor (public firstName:string, public lastName:string) {}
    greet = () => {
        console.log("Hi " + this.firstName);
    }

    get fullName():string {
        return this.firstName + " " + this.lastName;    
    }
}

class Email {
    constructor(public email:string) {
        console.log(this.email + ": " + (this.testEmail() ? "Valid" : "Invalid"));
    }
    private testEmail = () => {
        return (this.email.indexOf('@') == -1);        
    }

    testing = () => {
        return Email.constructor;
    }
}

let craig = new Person("Craig", "Davies");
craig.fullName;

