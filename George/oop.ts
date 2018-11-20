class Person {
    constructor(private firstName:string, private lastName:string, public email:string) {
        let email2 = new Email(email);
        email2.address = email;
    }

    // greet is a method and NOT a funciton because it sits within a class.
    greet = () => {
        console.log("Hi " + this.firstName + "\n");
    }
}

class Email {
    constructor(public address:string) {
        console.log(this.address + " is " + (this.validateEmail(this.address)? "valid" : "invalid"));
    }

    validateEmail = (address:string):boolean => {
        return (address.search('@') != -1);
    }
}

let george = new Person("George", "Webster", "gcwebster@hotmail.co.uk");
let steven = new Person("Steven", "Golden", "s.goldengoldens.com");

george.greet();
steven.greet();

console.log(george.email);