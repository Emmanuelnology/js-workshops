class Person {

  constructor (private firstName:string, private lastName:string, private emailObject:Email) {
    console.log(this.email + ": " + (emailObject.validate() ? "Valid" : "Invalid"));
  }
  
  public greet = () => {
    console.log("Greetings " + this.firstName);
  }

  get email():string {
    return this.emailObject.address;
  }

}

class Email {
  constructor (public address){}
  public validate() {
    return (this.address.indexOf("@")!=-1);
  }
}

let craig = new Person("Craig", "Livings", new Email("craig@nology.io"));
let jen = new Person("Jenna", "Livings", new Email("jen at craigisawesome.io"));

