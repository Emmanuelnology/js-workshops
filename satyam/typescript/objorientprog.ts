interface IPerson {
    fullName:string;
    email:string;
    greet();
}

class Person {
    constructor (protected firstName:string, protected lastName:string, public email:string) {
        console.log(this.email + ": " + (this.validateEmailAddress() ? "Legit Emailz":"UnLegit Emailz"));
    }

    public greet = () => {
        console.log("Hola " + this.firstName);
    }

    get fullName():string {
        return this.firstName + " " + this.lastName;
    }

    public validateEmailAddress() {
    return (this.email.indexOf("@")!= -1);
    }
}

// class Email {
//     constructor (public address) {}
//     public validateEmailAddress() {
//         return (this.address.indexOf("@")!= -1);
//     }
// }

class Nologist extends Person implements IPerson{
    
    constructor (firstName:string, lastName:string, email:string, public likesTrains:boolean){
        super (firstName, lastName, email)
    }

    public greet = () => {
        console.log("Hola " + this.fullName + " keep on nologin'");
    }

}

class Trainer extends Person implements IPerson {

    constructor (firstName:string, lastName:string, email:string, public likesTrains:boolean){
        super (firstName, lastName, email)
    }

    public greet = () => {
        console.log("Sup " + this.fullName + " keep on knowledgein'");
    }

}

let fakeNews = new Person("Fake", "News", "trump.at.massivenob.head");
let saty = new Nologist("Saty", "G", "satyg@nology.io", true);
let Craig = new Trainer("Craig", "L", "craig@nology.io", false);

// saty.greet();
console.log(saty.greet)
console.log(Craig.greet)

saty.greet();
Craig.greet();