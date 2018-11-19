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
  return("Hello, My name is " + firstName + " " + lastName);
}

export function maryAgeDifference() {
  return("Mary is " + (maryAge - myAge) + " years older than me");
}

export function nameLength() {
  return("The total length of both names is " + (firstName.length + lastName.length) + " characters");
}
