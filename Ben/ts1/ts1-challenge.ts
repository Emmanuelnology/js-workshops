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

export function greet(){
  return "Hello, My name is " + firstName + " " + lastName;
}

export function maryAgeDifference() {
  let ageDifference:number = maryAge - myAge;
  return "Mary is " + ageDifference + " years older than me";
}

export function nameLength() {
  let totalLength:number = firstName.length + lastName.length;
  return "The total length of both names is " + totalLength + " characters";
}
