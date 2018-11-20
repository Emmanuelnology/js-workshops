interface IPerson {
    fullName:string;
    greet();
}

class Person implements IPerson{
    constructor(private firstName:string, private lastName:string, public email:string) {
        let email2 = new Email(email);
        email2.address = email;
    }

    // greet is a method and NOT a funciton because it sits within a class.
    greet = () => {
        console.log("Hi " + this.firstName + "\n");
    }

    get fullName():string {
        return this.firstName + " " + this.lastName;
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

class nologist extends Person implements IPerson {
    constructor(firstName, lastName, email, public likestrains:boolean){
        super(firstName, lastName, email);
    }

    greet = () => {
        console.log("Howdy there nologist!")
    }
}

class trainer extends Person implements IPerson{
    constructor(firstName, lastName, email){
        super(firstName, lastName, email);
    }

    greet = () => {
        console.log("Howdy there trainer!")
    }

}





let george = new Person("George", "Webster", "gcwebster@hotmail.co.uk");
let george2 = new nologist("George", "Webster", "george.webster@nology.io", true);
let craig = new trainer("Craig", "Livings", "craig@nology.io");
let steven = new Person("Steven", "Golden", "s.goldengoldens.com");

george.greet();
george2.greet();
steven.greet();
craig.greet();

console.log(george.email);
console.log(george.fullName);