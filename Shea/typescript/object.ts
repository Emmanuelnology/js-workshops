interface IPerson {
    fullName:string;
    email: string;
    greet();
}

class Person implements IPerson{

    public greet = () => {
        console.log('Hi ' + this.fullName);
    }

    get fullName():string {
        return this.firstName + " " + this.lastName;
    }

    public validateEmail = (email) => {
        return (email.indexOf('@')!=-1) ? "valid email":"invalid email"
    }

    constructor (private firstName:string, private lastName:string, public email:string) {
        console.log(this.validateEmail(this.email));
    }   
}
let shea = new Person("Shea", "Murphy", "shea.murphy@nology.io");

class Nologist extends Person implements IPerson{


    constructor (firstName:string, lastName:string, email:string, public likesTrains:boolean) {
        super (firstName, lastName, email);
    }

    public greet = () => {
        console.log('Hi ' + this.fullName + " you nologist you!!!");
    }

}

class Trainer extends Nologist implements IPerson {

    constructor (firstName:string, lastName:string, email:string, likesTrains:boolean, public likesTrainsing:boolean) {
        super (firstName, lastName, email, likesTrains);
    }

    public greet = () => {
        console.log('Hi ' + this.fullName + " keep trainsing yo' !!!");
    }



}

let peter = new Nologist("Peter", "Anstey", "peter@peter.peter", true);
let craig = new Trainer("Craig", "Livings", "craig@craig.craig", true, true);

shea.greet();
peter.greet();
craig.greet();
