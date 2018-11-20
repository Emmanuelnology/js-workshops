interface IPerson {
  fullName:string;
  email: string;
  greet();
}

class Person implements IPerson {
  constructor (protected firstName:string, protected lastName:string, private emailObject:Email) {}
  public greet = () => {
    console.log("Hello " + this.fullName);
  }
  get email():string {
    return this.emailObject.address;
  }
  set eyeColor(color) {
    this.eyeColor = color;
  }
  get fullName():string {
    return this.firstName + " " + this.lastName;
  }
}

class Email {
  constructor (public address:string) {
    console.log(this.validEmail() ? this.address + " is a valid email address" : this.address + " is not a valid email address");
  }
  public validEmail = ():boolean => {
    return (this.address.indexOf("@") != -1);
  }
}

class Nologist extends Person implements IPerson {
  public likesTrains:boolean;
  constructor (firstName:string, lastName:string, emailObject:Email) {
    super(firstName, lastName, emailObject)
  }
  public greet = () => {
    console.log("Hi " + this.firstName);
  }
  learn = () => {
    console.log("I am learning");
  }
}

class Trainer extends Nologist implements IPerson {
  public greet = () => {
    console.log("Good day Mr " + this.lastName);
  }
}

let steve = new Person("Steve", "Steveson", new Email("steve.steveson"));
let ben = new Nologist("Ben", "Tomaney", new Email("Ben.Tomaney@nology.io"));
let craig = new Trainer("Craig", "Livings", new Email("craig@nology.io"));

ben.likesTrains = true;
craig.likesTrains = false;

steve.greet();
ben.greet();
craig.greet();
