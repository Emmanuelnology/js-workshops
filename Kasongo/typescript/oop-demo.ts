interface IPerson {
    firstName:string;
    lastName:string;
    greet();    
}


class Person {
    constructor (public firstName:string, public lastName:string) {}
    greet = () => {
        console.log("Hi " + this.firstName);
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

class Nologist extends Person implements IPerson {
    constructor(firstName:string, lastName:string, emailObject:string, valid:boolean) {
        super(firstName, lastName)
    }
    greet = () => {
        console.log('happy');
    }
}

let craig = new Nologist("Craig", "Jones", "google@gmai.com", true);
craig.greet;

