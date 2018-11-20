interface IPerson {
  fullName:string;
  email:string;
  greet();
}

class Person implements IPerson{
  protected firstName:string;
  protected lastName:string;
  constructor (firstName:string, lastName:string,private emailObject:Email) {
    this.firstName=firstName;
    this.lastName=lastName;
  }
  
  public greet = () => {
    console.log("Greetings " + this.email);
  }

  get email():string {
    return this.emailObject.address;
  }

  get fullName():string {
    return this.firstName + " " + this.lastName;
  }

}

class Email {
  constructor (public address){
    console.log(address + ": " + (this.validate() ? "Valid" : "Invalid"));
  }
  public validate() {
    return (this.address.indexOf("@")!=-1);
  }
}


class Nologist extends Person implements IPerson {
  public likesTrains:boolean;
  constructor (firstName:string, lastName:string, emailObject:Email){
    super(firstName, lastName, emailObject);
    }

  public greet = () => {
    console.log("Hi " + this.firstName + ", have a good learning day! Make some sandwiches (I like trains)");
  }

  learn = () => {
    console.log("I am learning stuff!");
  }

}

class Trainer extends Nologist implements IPerson {
  public greet = () => {
    console.log("Hi " + this.firstName + ", what'cha teaching today?");
  }
}




let craig = new Person("Craig", "Livings", new Email("craig@nology.io"));
let jen = new Nologist("Jen","Livings", new Email("jen@craigisawesome.com"));
let peter = new Trainer("Peter", "Anstey", new Email("peter@nology.io"));


craig.greet();
peter.greet();