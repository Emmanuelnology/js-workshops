class Person {
  public name:string;
  public surname:string;
  public email:string;
  constructor(name:string, surname:string, email:string){
    this.email = email;
    this.name = name;
    this.surname = surname;
  }
  greet() {
    console.log("Hi " + this.name + "!");
  }
}

class Person2 {
  public name:string;
  public surname:string;
  public email:string;
  constructor(name:string, surname:string, email:string){
    this.name = name;
    this.surname = surname;
    
    if(this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Invalid email!");
    }
    
  }
  greet() {
    console.log("Hi " + this.email + "!");
  }
  
  validateEmail(email) {
    return email.includes("@");
  }
}

class Person3 {
  constructor(public name:string, public surname:string, public email:string){
    this.name = name;
    this.surname = surname;
    this.email = new Email(email).get();
  }
  greet() {
    console.log("Hi " + this.email + "!");
  }
  
}

class Email {
  private address:string
  constructor(email) {
    if(this.validate(email)) {
      this.address = email;
    }
    else {
      throw new Error("Invalid email!");
    }        
  }
  private validate(email) {
    return email.includes("@");
  }
  public get():string {
    return this.address;
  }
}

class Teacher extends Person3 {
  subjects:string[];
  constructor(public name:string, public surname:string, public email:string, subjects:string[]){
    super(name,surname,email);
    this.subjects=subjects;
  }
  teach() {
    for(let subject of this.subjects){
      console.log("My name is " + this.name + " and I teach " + subject);
    }
  }
}

class Student extends Person3 {
  learn() {
    console.log("My name is " + this.name + " and I learn Spanish");
  }
}

class HeadTeacher extends Teacher {
  teach() {
    console.log("My name is " + this.name + " and I am standing in");
  }
}

var me = new HeadTeacher("Craig", "Livings", "craig@nology.io", ["Spanish", "French"]);
me.greet();
me.teach();