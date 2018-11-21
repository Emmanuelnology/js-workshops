interface IPerson {
  fullName: string;
  greet();
}

class person implements IPerson {  
public eyecolor:string;

  constructor 
    (public firstName:string, 
    public lastName:string, 
    public address: email) 
    //public means broadcast to everything private does the opposite
    
    {
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
    this.eyecolor = "blue"
    
  }

  get fullName():string {
    return this.firstName + " " + this.lastName;
  }

  public greet = () =>{ 
    console.log("Greetings " + this.fullName)
  };

  // get email():string {
  //   return this.emailObject.address;
  // }
}

class email{
  constructor(public address){
    console.log(this.address + ": " + (this.validateEmail() ? "valid" : "is not valid"))
  }
  public validateEmail(){
    return (this.address.indexOf('@')!=-1);
  }
}

class nology extends person{

  // constructor(firstName:string, lastName:string, emailObject:email, public likesTrains:boolean)
  // super(firstName, lastName, emailObject)

  learn = () => {
    console.log("im learning stuff");
  }

  greet = () =>{
    console.log("hello " + this.fullName + " have a good day of learning")
  }

}



let Luke = new person("luke", "delaney", new email ("delaney.luke95@gmail.com"))
let craig = new person ("craig", "livings", new email ("craig@nology.io"))
let peter = new nology("peter", "livings", new email("peter at nology.io"))
peter.greet();
craig.greet();


// let Craig = new person();
// Craig.firstName = "Craigy";

// Luke.greet(); //prints Hi luke
// Craig.greet(); // prints hi craigy
// console.log(Craig.firstName); // prints craigy


