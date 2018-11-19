let firstName:string = "Bob";
let lastName:string = "Smith";
const myAge:number = 22;
const maryAge:number = 33;

export let greet = ():string => "Hello, My name is " + firstName + " " + lastName;

export let maryAgeDifference = ():string => {
  const ageDifference:number = maryAge - myAge;
  return "Mary is " + ageDifference + " years older than me";
}

export let nameLength = ():string => {
  const totalLength:number = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
}
