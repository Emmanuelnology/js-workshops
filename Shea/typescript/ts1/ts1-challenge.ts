/*


Programatically create the following outputs by filling in the missing function logic

Outputs:
--------
Hello, My name is Bob Smith
Mary is 11 years older than me
The total length of both my names is 8 characters

*/

const firstName = "Bob";
const lastName = "Smith";
let myAge = 22;
let maryAge = 33;

export let greet = ():string => "Hello, My name is " + firstName + " " + lastName;

export let maryAgeDifference = ():string => {
  const ageDif:number = maryAge - myAge;
  return "Mary is " + ageDif + " years older than me";
}

export let nameLength = ():string => {
  const totalNameLength:number = firstName.length + lastName.length;
  return "The total length of both names is " + totalNameLength + " characters";
}
