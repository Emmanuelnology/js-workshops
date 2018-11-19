/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/

let firstName:string = "Bob";
let lastName:string = "Smith";
let myAge:number = 22;
let maryAge:number = 33;

export let greet = ():string => "Hello, My name is " + firstName + " " + lastName;

export let maryAgeDifference = ():string => {
  const ageDiff:number = maryAge - myAge;
  return "Mary is " + ageDiff + " years older than me";
}

export let nameLength = ():string => {
  const calcNameLength:number = firstName.length + lastName.length;
  return "The total length of both names is " + calcNameLength + " characters";
}
