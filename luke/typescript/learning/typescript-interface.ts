interface person {
  lastName:string
  firstName:string
  likesCheese?: boolean
}
// specific interface for type definition, ocne you make a new person1. 
//it shows the list in the definition

const person1:person = {
  firstName: "Bob",
  lastName: "Smith"
}

const person2:person = {
  firstName: "Derek",
  lastName: "Cathead"
}

export let greet = (person1:person, person2:person):string => {
 return "Hello, My name is "+person1.firstName+" "+person2.lastName;
}

console.log(greet(person1, person2));